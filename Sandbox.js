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






// Square w/ different colors & Sound for each line






// Figure 8
async function startProgram() {
	for (var _i1 = 0; _i1 < 8; _i1++) {
		setSpeed(50)
		await spin(360,5)
		await spin(-360,5)
	}
}