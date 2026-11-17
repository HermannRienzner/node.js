// inizia la catena di if per trovare l'operazione desiderata

if(process.argv[process.argv.length - 1] == "add"){
	let result  = 0

	// il for loop permette l'input di pi√ argomenti numerici
	// svolge l'operazione usando tutti i valori forniti

	for (let i = 2; i < process.argv.length - 1; i++){
		result  += Number(process.argv[i])
	}
	console.log(result)
}
else if(process.argv[process.argv.length - 1] == "division"){
	let result = process.argv[2]
	for (let i = 3; i < process.argv.length - 1; i++){
		result /= process.argv[i]
	}
	console.log(result)
}
else if(process.argv[process.argv.length - 1] == "subtraction"){
	let result  = process.argv[2]
	for (let j = 3; j < process.argv.length - 1; j++){
		result  -= Number(process.argv[j])
	}
	console.log(result)
}
else if(process.argv[process.argv.length - 1] == "product"){
	let result = Number(process.argv[2])
	for (let k = 3; k < process.argv.length - 1; k ++){
		result *= Number(process.argv[k])
	}
	console.log(result)
}
else{
	console.log("nome operazione mancante")
}
