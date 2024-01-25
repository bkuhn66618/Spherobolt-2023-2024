// Team Members: Brian Kuhn & Jensen Muday
// Name: Brian Kuhn
// Date: 1.22.2024
// Program: Maze
// Bolt-ID: SB-F28B
/*
//initial start message
async function startProgram() {
	await scrollMatrixText('Start!', {r:9, g:255, b:123}, 25, true)
	await speak('Start')
}
*/
//Roll to Blue then Blue LED
async function startProgram() {
	await roll(0, 52.5, 3)
	setMainLed({r:1, g:1, b:253})
	await scrollMatrixText('blue', {r:2, g:2, b:123}, 25, true)
	await speak('blue')
	//sound 1
	await roll(90, 52.5, 2)
	await Sound.play(true)
	//roll to red, around corner then red LED
	await roll(180,68,1)
	await delay(1)
	await roll(225, 68, 1)
	setMainLed({r:224, g:1, b:0})
	//sound 2
	await roll(135,50,1)
	await delay(1)
	await roll(45,68,1)
	await delay(1)
	await Sound.play(true)
	//Green LED
	await roll(135,45,1)
	await delay(1)
	await roll(225,45,1)
	await delay(1)
	await roll(135,50,1)
	await scrollMatrixText('green', {r:2, g: 251, b:2}, 25, true)
	setMainLed({r:5, g:215, b:5})
	
	//reset
	await roll(0,0,2)
}