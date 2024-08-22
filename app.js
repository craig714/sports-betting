let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

const team1elm = document.getElementById('team1yes')

const team2elm = document.getElementById('team2yes')






function drawTeam1() {
  const team1Container = document.getElementById("team1"); team1Container.innerHTML = '';
}

function draftTeam1() {
  let team1Content = ''
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == '1') {
      console.log('player', player);
      team1Content += player.emoji
    }
  }
  console.log('Heres team 1', team1Content);
  team1elm.innerText = team1Content
}

draftTeam1()


function draftTeam2() {
  let team2Content = ''
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == '2') {
      console.log('player', player);
      team2Content += player.emoji
    }
  }
  console.log('Heres team 2', team2Content);
  team2elm.innerText = team2Content
}

draftTeam2()

function betTeam1() {
  let team1SkillTotal = null
  let team1Arr = players.filter((human1) => human1.teamNumber == 1)
  console.log('team1arr', team1Arr);
  team1Arr.forEach((team1Skill) => team1SkillTotal += team1Skill.skill)
  console.log('Team 1 skills', team1SkillTotal);

}

function betTeam2() {
  let team2SkillTotal = null
  let team2Arr = players.filter((human2) => human2.teamNumber == 2)
  console.log('team1arr', team2Arr);
  team2Arr.forEach((team2Skill) => team2SkillTotal += team2Skill.skill)
  console.log('Team 2 skills', team2SkillTotal);

}












