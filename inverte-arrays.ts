let original: number[] = [10, 20, 30, 40, 50, 60]
let invertido: number[] = []

for (let i = original.length - 1; i >= 0; i--) {
	invertido.push(original[i]);
}


console.log("original: ", original)
console.log("invertido: ", invertido)

