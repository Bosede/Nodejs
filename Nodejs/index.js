let a = 100
let b = 500
console.log(a+b);
console.log(process.env.NODE_ENV)
const arrayBuffer = new Uint16Array(2)
arrayBuffer[0] = 5
arrayBuffer[1] = 7000
console.log(arrayBuffer);
const buffromArrayBuffer = Buffer.from(arrayBuffer.buffer)
console.log(buffromArrayBuffer);

const convertNum = function(num) {
	return num + 10;
}
const processNum = function(num, fn) {
	return fn(num);

}
console.log(processNum(10, convertNum))

const fs = require('fs')
fs.writeFile('message.txt', 'Hello World', (err) => {
	if (err){
		console.error(err)
		process.exit(1)
	} else{
		console.log('Writing is done');
	
	}
})