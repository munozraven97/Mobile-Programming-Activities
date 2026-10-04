
// GAMING TOURNAMENT MANAGEMENT SYSTEM

// ---------- 10 CONST VARIABLES ----------

const tournamentName = "NwSSU Gaming Cup";
const game = "Mobile Legends";
const venue = "NwSSU E-Sports Arena";

const team1 = {
    name: "Team Alpha",
    captain: "Raven",
    score: 85,
    status: "Active"
};

const team2 = {
    name: "Team Nova",
    captain: "Jai",
    score: 92,
    status: "Active"
};

const team3 = {
    name: "Team Blaze",
    captain: "Mark",
    score: 70,
    status: "Inactive"
};

const teams = [team1, team2, team3];

const prizes = ["Champion", "Runner-up", "Third Place"];


// ---------- CLASS, CONSTRUCTOR & METHOD ----------

class Tournament {
    constructor(name, game) {
        this.name = name;
        this.game = game;
    }

    display() {
        return `${this.name} - ${this.game}`;
    }
}

const tournament = new Tournament(tournamentName, game);


// ---------- 10 LET VARIABLES ----------

let totalTeams = teams.length;
let activeCount = 0;
let inactiveCount = 0;
let champion = "";
let highestScore = 0;
let currentTeam = team1;
let teamName = currentTeam.name;
let captainName = currentTeam.captain;
let teamScore = currentTeam.score;
let venueName = venue;


// ---------- 5 ARROW FUNCTIONS ----------

const showTeam = team => `${team.name} - ${team.score} points`;

const getScore = team => team.score;

const isActive = team => team.status === "Active";

const addBonus = score => score + 5;

const getWinner = list => list.reduce(
    (best, team) => team.score > best.score ? team : best
);


// ---------- TEMPLATE LITERALS ----------

console.log(`${tournamentName}`);
console.log(`Game: ${game}`);
console.log(`Venue: ${venue}`);
console.log(`Tournament: ${tournament.display()}`);
console.log(`Total Teams: ${totalTeams}`);

console.log(`${team1.name} has ${team1.score} points.`);
console.log(`${team2.name} has ${team2.score} points.`);
console.log(`${team3.name} has ${team3.score} points.`);

console.log(`Captain: ${captainName}`);
console.log(`Current Score: ${teamScore}`);


// ---------- 3 ARRAY DESTRUCTURING ----------

const scores = [85, 92, 70];
const [score1, score2, score3] = scores;

const members = ["Raven", "Jai", "Mark"];
const [player1, player2, player3] = members;

const places = ["Champion", "Runner-up", "Third Place"];
const [first, second, third] = places;


// ---------- 3 OBJECT DESTRUCTURING ----------

const { name: alphaName, captain: alphaCaptain } = team1;

const { name: novaName, score: novaScore } = team2;

const { name: blazeName, status: blazeStatus } = team3;


// ---------- ARRAY SPREAD #1 ----------

const allTeams = [...teams, {
    name: "Team Storm",
    captain: "Kyle",
    score: 80,
    status: "Active"
}];


// ---------- ARRAY SPREAD #2 ----------

const allPlayers = [...members, "Kyle", "Leo"];


// ---------- OBJECT SPREAD #1 ----------

const updatedTeam1 = {
    ...team1,
    score: addBonus(team1.score)
};


// ---------- OBJECT SPREAD #2 ----------

const updatedTeam2 = {
    ...team2,
    status: "Champion"
};


// ---------- MAP #1 ----------

const teamNames = teams.map(team => team.name);


// ---------- MAP #2 ----------

const teamScores = teams.map(team => `${team.name}: ${team.score}`);


// ---------- FILTER #1 ----------

const activeTeams = teams.filter(isActive);


// ---------- FILTER #2 ----------

const highScoreTeams = teams.filter(team => team.score >= 80);


// ---------- OPTIONAL CHAINING #1 ----------

const captainEmail = team1.captainInfo?.email;


// ---------- OPTIONAL CHAINING #2 ----------

const teamCoach = team2.coach?.name;


// ---------- WINNER ----------

const winner = getWinner(teams);
champion = winner.name;
highestScore = winner.score;


// ---------- COUNT ACTIVE / INACTIVE ----------

activeCount = activeTeams.length;
inactiveCount = teams.filter(team => team.status === "Inactive").length;


// ---------- FINAL REPORT ----------

console.log("\n====================================");
console.log("       GAMING TOURNAMENT REPORT");
console.log("====================================");

console.log(`Tournament : ${tournamentName}`);
console.log(`Game       : ${game}`);
console.log(`Venue      : ${venueName}`);
console.log(`Teams      : ${totalTeams}`);
console.log(`Active     : ${activeCount}`);
console.log(`Inactive   : ${inactiveCount}`);

console.log("\n--- TEAM LIST ---");
console.log(teamNames);

console.log("\n--- TEAM SCORES ---");
console.log(teamScores);

console.log("\n--- ACTIVE TEAMS ---");
console.log(activeTeams);

console.log("\n--- HIGH SCORING TEAMS ---");
console.log(highScoreTeams);

console.log("\n--- WINNER ---");
console.log(`${champion} wins with ${highestScore} points!`);

console.log("\n--- UPDATED TEAMS ---");
console.log(`${updatedTeam1.name}: ${updatedTeam1.score} points`);
console.log(`${updatedTeam2.name}: ${updatedTeam2.status}`);

console.log("\n====================================");
console.log("          END OF TOURNAMENT");
console.log("====================================");