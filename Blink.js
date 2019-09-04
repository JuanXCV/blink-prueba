function SumaArray(lista) {

	let suma = 0

	lista.forEach( x => {

		if(typeof x === "number"){
			suma += x
		} else if(x === null){

		} else {
			x.forEach( y => {
				suma += y
			})
		}
	})

	//Podría haber usado un switch en caso de que hubiera más casos diferentes... con esto se soluciona para los ejemplos pasados, pero no es totalmente funcional :).

	return suma
}

let lista1 = [1, 4, 3, 0];
let lista2 = [1, 2, [5, 8], 4];
let lista3 = [0, [6, 2], null, 7, 1];

console.log(SumaArray(lista3))			 