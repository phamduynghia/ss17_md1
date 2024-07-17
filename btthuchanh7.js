let players = {
    name: "Messi",
    age: 30,
    nation: "Argentine",
    club: "PSG",
  };
  players.email = "huongcaoha@gmail.com";
  console.log(players);
  
  players.club = "Barcelona";
  console.log(players);
  
  delete players.age;
  console.log(players);