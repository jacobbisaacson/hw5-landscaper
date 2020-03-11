const lawnApp = {
	money: 0,
	tool: {
		teeth: true,
		scissors: false,
		pushLawnmower: false,
		batteryLawnmoser: false,
		starvingStudents: false,
	},
	
	askForAction: function() {
		// if(this.money === 1000 && starvingStudents === false) {
		// 	alert("You won! You're good at business!")
		// 	return
		// }
		const input = prompt("Do you want to cut some lawns, or buy a new tool?", "(cut, buy)")
		if(input.toLowerCase() === "cut") {
			this.teethCut()
		} else if (input.toLowerCase() === "buy") {
			this.buyNewTool()
		}
	},

	teethCut: function() {
		if(this.money <= 5) {
			this.money += 1
		} else {
		for(let i = this.money; i < 5; i++) {
			const input1 = prompt("Cut a lawn with your teeth?", "(Y/N)")
			if(input1.toLowerCase() === "Y") {
				alert("Great! You just made $1! Now get to work!")
				this.money += 1
		} else if(input.toLowerCase() === "N") {
			alert("no work, no money")
			this.start()
		}
		if(this.money >= 5) {
			alert("Nice! You can buy a new tool!")
			this.showStatus()
			this.askForAction()
			}
		}
	}
},

	scissorsCut: function() {
		for(let i = 0; i < 5; i++) {
			const input2 = prompt("Cut a lawn with your teeth?", "(Y/N)")
			if (input2.toLowerCase() === "Y") {
				alert("Great! You just made $1! Now get to work!")
				this.money += 1
			} else if(input2.toLowerCase() === "N") {
			alert("no work, no money")
			this.start()
			}
			if(this.money >= 5) {
			alert("Nice! You can buy a new tool!")
			this.showStatus()
			this.askForAction()
			}
		}
	},
	showStatus: function() {
		alert(`you have ${this.tool} to cut grass with, and $${this.money} to buy tools with.`)
	},
	start: function() {
		alert("You're starting a landscaping business. Make money to buy better tools!")
		this.showStatus()
		this.askForAction()
		}
	}

lawnApp.start()