console.log("hw5");


//user opens page
// user gets prompt saying, "cut lawn for 1 dollar? y/n"
// user selects yes, money increases by 1, teeth decrease by 1
// start money at 0


//You are starting a landscaping business, but all you have are your teeth.
//Using just your teeth, you can spend the day cutting lawns and make $1. 
//You can do this as much as you want.
let lawnTools = ["teeth", "scissors", "pushLawnmower", "batteryLawnmower", "starvingStudents"]
const lawnApp = {
	money: 0,

	reassignTool: function () {
	lawnTools.splice(2, 1, this.lawnTools)
	},
		// need to reassign each tool to the following index number in the array
		//after the next one has been bought
		// when scissorsCut is called, turn teeth to false, and scissors to true
		// then again when pushLawnmower is called, turn scissors to false, pushLawnmower to true
		// then 
	userPlay: function () {
		if(this.money === 1000) { 
		// both being the end of the game
			alert("You won! You're good at business!")
			return // need to stop the code from running if game is over
			}
			const letsPlay = prompt("Let's play!", "Y/N")
 		// just 1 choice to play, can hit cancel (already in there) // call method based on input
 			if(letsPlay.toUpperCase() === "Y") {
		//call teethCut function -- go make one now
			this.teethCut()
		} else if (letsPlay.toUpperCase() === "N") {
			this.showStatus()
			this.start()
		}
	},
	teethCut: function () {
		if(this.money <= 5) {
			this.money += 1
			// soething here to make this.lawntools to move down the string (or make themn booleans again)
		}
		else {
		alert(`Go cut some lawns! You get $1 for every cut. Right now, you have $${this.money}.`)
		}
		// need loop to iterate over money and tools
		for(let i = 0; i < 5; i++) { // $5 becuase thats how long it will take to get a new tool (make scissors true)
			const userPlay = prompt("You want to cut some grass with your teeth?", "(Y/N)") //
			// Y = add $1 to money, N = call showStatus (how much money user has and what their current 
			// tool is)
			// need to go make showStatus now
			// need to go make userPlay now
			// DO I NEED ANOTHER forLOOP for when money is over $5 in this part?? 
			// then call the scissorsCut function?
			// make scissors cut function now
			if(userPlay.toUpperCase() === "Y") {
				alert("Great! You just made $1! Now get to work!")
				this.money += 1
			} else if(userPlay.toUpperCase() === "N") {
				alert("k bye!")
				this.start ();
			}
			if(this.money >= 5) {
				this.reassignTool();
				this.scissorsCut();
			}
		}
	},
	scissorsCut: function () {
		if(this.money <= 25) {
			this.money -= 5
			// need loop for when get's to 25?
		alert(`Nice! You made enough to buy some ${this.lawnTools}! You make $5 per cut with those, but it just cost you $5! Right now, you have $${this.money}.`)
		// need loop to iterate over money and tools	
		} // it's adding $5 when it's called to scissorscut from teech cut??
		for(let i = this.money; i < 25; i++) { // $5 becuase thats how long it will take to get a new tool 
			// make scissors true)
			const userPlay = prompt("You want to cut some grass with your new Scissors?", "(Y/N)") 
			if(userPlay.toUpperCase() === "Y") {
				alert("Great! You just made $5! Now get to work!")
				this.money += 5
			} else if(userPlay.toUpperCase() === "N") {
				alert("yikes! go back to cutting with your teeth then!")
				this.teethCut();
			}
			if(this.money >= 25) {
				this.pushLawnmowerCut();
			}
		}
	},
	pushLawnmowerCut: function () {
		if(this.money <= 50) {
			this.money -= 25
		alert(`Nice! You made enough to buy an old school Push Lawnmower! You make $50 per cut with that, but it just cost you $25! Right now, you have $${this.money}.`)
		// need loop to iterate over money and tools	
		}
		for(let i = this.money; i < 50; i++) {
			const userPlay = prompt("You want to cut some grass with your new Push Lawnmower?", "(Y/N)") 
			if(userPlay.toUpperCase() === "Y") {
				alert("Great! You just made $50! Now get to work!")
				this.money += 50
			} else if(userPlay.toUpperCase() === "N") {
				alert("yikes! go back to cutting with those scissors then!")
				this.scissorsCut();
			}
			if(this.money >= 250) {
				this.batteryLawnmowerCut();
			}
		}

	},
	batteryLawnmowerCut: function () {
		if(this.money <= 500) {
			this.money -= 250
		alert(`Nice! You made enough to buy an old school Battery Lawnmower! You make $100 per cut with that, but it just cost you $250! Right now, you have $${this.money}.`)
		// need loop to iterate over money and tools	
		}
		for(let i = this.money; i < 500; i++) {
			const userPlay = prompt("You want to cut some grass with your new Battery Lawnmower?", "(Y/N)") 
			if(userPlay.toUpperCase() === "Y") {
				alert("Great! You just made $100! Now get to work!")
				this.money += 100
			} else if(userPlay.toUpperCase() === "N") {
				alert("yikes! go back to cutting with that old school mower then!")
				this.pushLawnmowerCut();
			}
			if(this.money >= 500) {
				this.starvingStudentsCut();
			}
		}
	},
	starvingStudentsCut: function () {
		if(this.money <= 1000) {
			this.money -= 500
		alert(`Nice! You made enough to hire a team Starving Students! You make $250 with your new team, but just cost you $500 to hire them! Right now, you have $${this.money}.`)
		// need loop to iterate over money and tools	
		}
		for(let i = this.money; i < 1000; i++) {
			const userPlay = prompt("You want to cut some grass with your sweet new team?", "(Y/N)") 
			if(userPlay.toUpperCase() === "Y") {
				alert("Great! You just made $250! Now get to work!")
				this.money += 250
			} else if(userPlay.toUpperCase() === "N") {
				alert("yikes! go back to cutting with that batter lawnmower then!")
				this.batteryLawnmowerCut();
			}
			if(this.money >= 1000) {
				this.userPlay();
			}
		}
	},
	showStatus: function () {
		alert(`Your tool is ${lawnTools[0]}, and you have $${this.money}.`);
			// says you're tool is {object objct} -0- how to make that say what the current tool is
			// but the money is adding up! just not saying it in the promps
	},
	start: function () {
		// alerts to user about the game (when page opens / reloads)
		alert("Landscaping Game! Wooo!")
		alert("You're starting a landscaping business. Work hard, earn money, buy better cutting tools!")
		this.showStatus();
		this.userPlay();
		this.reassignTool();
	}
}
lawnApp.start()
