console.log("hw5");


//user opens page
// user gets prompt saying, "cut lawn for 1 dollar? y/n"
// user selects yes, money increases by 1, teeth decrease by 1
// start money at 0
// 


//You are starting a landscaping business, but all you have are your teeth.
//Using just your teeth, you can spend the day cutting lawns and make $1. 
//You can do this as much as you want.



const app = {
	money: 0,
	cutCost: 1,

askForAction: function() {
	const askToCut = prompt('Can I cut your lawn for $1?', '(Y/N)')
		if(askToCut.toUpperCase() === 'Y') { 
			alert("great! give me $1 please and I'll get started");
	// will be this.whatever later?  why are we committing after initial steps?
		} else if(askToCut.toUpperCase() === 'N') {
			alert("ok hope your grass overtakes your house");
		}
	}
}

app.start()