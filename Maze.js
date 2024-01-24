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
	await roll(90, 52.5, 2)
	await Sound.play(true)
}