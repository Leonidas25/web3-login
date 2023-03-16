import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import VotingAbi from "../contracts/Voting.json";

const CONTRACT_ADDRESS = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788';
const CANDIDATE_NAMES = ['Alice', 'Bob', 'Charlie'];

export function VotingComponent() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const init = async () => {
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(_provider);

      const _signer = _provider.getSigner();
      setSigner(_signer);

      const _contract = new ethers.Contract(CONTRACT_ADDRESS, VotingAbi.abi, _signer);
      setContract(_contract);
    };

    init();
  }, []);

  useEffect(() => {
    const fetchCandidates = async () => {
      if (!contract) return;

      const _candidates = [];
      for (let i = 1; i <= CANDIDATE_NAMES.length; i++) {
        const candidate = await contract.candidates(i);
        _candidates.push(candidate);
      }

      setCandidates(_candidates);
    };

    fetchCandidates();
  }, [contract]);

  const vote = async (candidateId) => {
    if (!contract) return;

    try {
      await contract.vote(candidateId);
      alert('Vote successful!');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="App">
      <h1>Voting DApp</h1>
      <h2>Candidates</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name} - Votes: {candidate.voteCount.toString()}
            <button onClick={() => vote(candidate.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
