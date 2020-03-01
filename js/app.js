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
		starvingStudents: false,
	},
	start: function () {
		// alerts to user about the game (when page opens / reloads)
		alert("Landscaping Game! Wooo!")
		alert("You're starting a landscaping business. Work hard, earn money, buy better cutting tools!")
		const letsPlay = prompt("Let's play!", "Y")
		// just 1 choice to play, can hit cancel (already in there)
		if(letsPlay.toUpperCase() === "Y") {
			// call teethCut function -- go make one now
			this.teethCut();
		}
	},
	teethCut: function () {
		alert(`Go cut some lawns! You get $1 for every cut. Right now, you have $${this.money}.`)
		// need loop to iterate over money and tools
		for(let i = 0; i < 5; i++) { // $5 becuase thats how long it will take to get a new tool (make scissors true)
			const userPlay = prompt("You want to cut some grass with your teeth?", "(Y/N)") //
			// Y = add $1 to money, N = call showStatus (how much money user has and what their current tool is)
			// need to go make showStatus now
			// need to go make userPlay now
			// DO I NEED ANOTHER forLOOP for when money is over $5 in this part?? then call the scissorsCut function?
			// make scissors cut function now
			if(userPlay.toUpperCase() === "Y") {
				alert("Great! You just made $1! Now get to work!")
				this.money += 1
				this.userPlay();
			} else if (userPlay.toUpperCase() === "N") {
				this.showStatus();
			}
		}
	},
	userPlay: function () {
		if(this.money === 1000 && this.lawnTool === starvingStudents) { // both being the end of the game
			alert("You won! You're good at business!")
			return // need to stop the code from running if game is over
		}
	},

	showStatus: function () {
		// need loop to iterate trough the tools array to see what's true.  if this.money is >= 5, then scissors becomes true
		// and teeth becomes false... and so on
		// then loop goes until a true is hit, and that tool is called to the function
		// while this.lawnTOol is false, contiune the loop until true?
		if (this.money < 5) {alert(`Your tool is ${this.lawnTools}, and you have $${this.money}.`);
			} else {alert("go make $5 to earn a better tool!");
			alert(`you have ${this.lawnTools} to cut lawns with right now`); // says you're tool is {object objct}
			// but the money is adding up!
		}
	},
	scissorsCut: function () {

	},
	pushLawnmowerCut: function () {

	},
	batteryLawnmowerCut: function () {

	},
	startingStudentsCut: function () {
		
	}
}

lawnApp.start()



