let numCandidates = parseInt(prompt("Enter the number of candidates:"));

let candidates = [];
for (let i = 1; i <= numCandidates; i++) {
  let candidateName = prompt(`Name for candidate ${i}:`);
  candidates.push({ name: candidateName, votes: 0 });
}

let numVoters = parseInt(prompt("Enter the number of voters:"));

for (let i = 1; i <= numVoters; i++) {
  let vote = prompt(`Enter the name of the candidate for voter ${i}:`);

  let candidate = candidates.find(c => c.name === vote);
  if (candidate) {
    candidate.votes++;
  } else if (vote.trim() !== "") {
    console.log(`Invalid vote for '${vote}'. Please enter a valid candidate name or leave it empty for a blank vote.`);
  }
}

candidates.sort((a, b) => b.votes - a.votes);

if (candidates[0].votes === 0) {
  console.log("No candidate received any votes.");
} else if (candidates[0].votes === candidates[1].votes) {
  console.log("There is a tie.");
} else {
  console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
}

console.log("Results:");
for (let candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}
