let suma = 0;

console.time('all');
console.time('time');
for (let index = 0; index < 1000000000; index++) {
	suma += index;	
}
console.timeEnd('time');

console.time('time2');
for (let index = 0; index < 1000000000; index++) {
	suma += index;	
}
console.timeEnd('time2');


setTimeout(() => {
	console.log('Time out');
}, 5000)
console.timeEnd('all');