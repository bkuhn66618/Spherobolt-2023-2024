// Team Members: Brian Kuhn & Jensen Muday
// Name: Brian Kuhn
// Date: 1.22.2024
// Program: Maze
// Bolt-ID: SB-F28B

//initial start message
async function startProgram() {
	await scrollMatrixText('Start!', {r:9, g:255, b:123}, 25, true)
	await speak('Start')

//Roll to Blue then Blue LED
	await roll(0, 52.5, 3)
	setMainLed({r:1, g:1, b:253})
	await scrollMatrixText('blue', {r:2, g:2, b:123}, 25, true)
	await speak('blue')
//Roll to sound then play sound
	await roll(90, 52.5, 2)
	await Sound.play(true)
	await roll(180, 68, 1)
	await delay(1)
	await roll(223, 66, 1)
	await delay(1)
	await scrollMatrixText('red', {r:224, g: 1, b:0}, 25, true)
	setMainLed({r:224, g:1, b:0})
	//Sound 2
	await roll(135, 45,1)
	await delay(1)
	await roll(45,68,1)
	await delay(1)
	await Sound.play(true)
	//Green Led
	await roll(135,48,1)
	await delay(1)
	await roll(225,45,1)
	await delay(1)
	await roll(130,48,1)
	await scrollMatrixText('green', {r:2, g: 251, b:2}, 25, true)
	setMainLed({r:5, g:120, b:5}) 
	//Sound 3 and Purple
	await roll(42,62,1)
	await delay(1)
	await roll(357,52,1)
	setMainLed({r: 115, b:110, g:0})
	await Sound.play(true)
	//finish
	await roll(30, 30, 5)
	await scrollMatrixText('FIN', {r:85, g: 85, b:85}, 10, true)
	await speak('finish')
	//reset
	await roll(0,0,2)
	
} 