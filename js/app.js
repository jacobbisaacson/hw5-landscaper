console.log("hw5");


//user opens page
// user gets prompt saying, "cut lawn for 1 dollar? y/n"
// user selects yes, money increases by 1, teeth decrease by 1
// start money at 0
// 


//You are starting a landscaping business, but all you have are your teeth.
//Using just your teeth, you can spend the day cutting lawns and make $1. 
//You can do this as much as you want.


let cutCost = 1;
const lawnApp = {
	money: 0,
	lawnTools: {
		teeth: true,
		scissors: false,
		pushLawnmower: false,
		startingStudents: false,
	},
	start: function () {
		// alerts to user about the game (when page opens / reloads)
		alert("Landscaping Game! Wooo!")
		alert("You're starting a landscaping business. Work hard, earn money, buy better cutting tools!")
		const letsPlay = prompt("Let's play!", "Y")
		// just 1 choice to play, can hit cancel (already in there)
	}
}

lawnApp.start()



