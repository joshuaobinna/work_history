const team = {
 _players: [
   {firstName: "Pablo",
    lastName: "Sanchez",
    age: 27}

   {firstName: "Lionel",
   lastName: "Messi",
   age: 30}

   {firstname: "christiano",
   lastName: "Ronaldo",
   age: 31}
    ]

 _games: [{opponent: "Real Madrid",
       teamPoints: 42,
       opponentPoint: 33}
     {opponent: "Athletico Madrid",
      teamoPoints: 42,
       opponentPoints: 34}
    {opponent: "Villareal",
     teamPoints: 42,
      opponentPoints: 30}],
      addGame(opp, myPts, oppPts) {
        const game = {
          opponent: opp,
          points: mypts,
          opponentPoints: oppPts
        }
        this.gsme.push(game);
      };
  team.addGame("Real Madrid", 42, 33);
  team.addGame("Athletico Madrid", 42, 34);
  team.addGame("Villareal", 42, 30);
 get players() {
   return this._players;
 }
get games() {
  return this._games;
}
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: "firstName",
      lastName: "lastName",
      age: age
    };

    this.players.push(player);
    },
};
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
