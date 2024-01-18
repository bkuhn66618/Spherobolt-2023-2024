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
		setMainLed(209,19,19)
		await roll(90, 50, 2)
		setMainLed(255,205,3)
		await roll(180, 50, 2)	
		setMainLed(78,255,3)
		await roll(270, 50, 2)	
		setMainLed(54,190,227)
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