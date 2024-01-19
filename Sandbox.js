//Programmer: Brian
//Date: 1.10.2024
//Program: Sphero Bolt Testing
//Bolt ID: SB-F28B

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 145, g: 0, b: 100});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
	
}
*/

// Square w/ different colors for each line
//Date:1.18.2024
async function startProgram() {
	for (var _i1 = 0; _i1 < 8; _i1++) {
		setMainLed({r:209,g:19,b:19})
		await roll(90, 50, 2)
		setMainLed({r:255,g:205,b:3})
		await roll(180, 50, 2)	
		setMainLed({r:78,g:255,b:3})
		await roll(270, 50, 2)	
		setMainLed({r:54,g:190,b:227})
		await roll(360, 50, 2)	
		
	

	}
}

// Square w/ different colors & Sound for each line
/*





// Figure 8
//Date:1.18.2024
async function startProgram() {
	for (var _i1 = 0; _i1 < 8; _i1++) {
		setSpeed(50)
		await spin(360,5)
		await spin(-360,5)
	}
}
*/