const stringCalculator = {
    add: (cadena) => {
        if (cadena === "") {
            return 0
        }
        else if (cadena.includes("-")) {
            throw new NegativesError('Negatives')
        }
         else if (cadena.includes("//")) {
            var delimitador = cadena[2];
            cadena = cadena.slice(3)
            cadena = stringCalculator.validarSaltos(cadena, delimitador)
            cadena = stringCalculator.validarInicioCadena(cadena, delimitador)
            numeros = cadena.split(delimitador)
            return stringCalculator.sumarNumeros(numeros)

        } 
        else if (cadena.includes(",")) {
            cadena = stringCalculator.validarSaltos(cadena, ",")
            cadena = stringCalculator.validarInicioCadena(cadena, ",")
            numeros = cadena.split(",") 
            return stringCalculator.sumarNumeros(numeros)
        } 
    
        else {
            return parseInt(cadena)
        }

    },
    sumarNumeros: (numeros) => {

        let suma = 0;
        for (let i in numeros) {
            suma += parseInt(numeros[i]);
        }
        return suma
    },
    validarInicioCadena: (cadena, delimitador) => {
        if (cadena[0] == delimitador) {
            return cadena = cadena.slice(1)
        } else {
            return cadena
        }
    },
    validarSaltos: (cadena, delimitador) => {
        if (cadena.match(/\n/g) !== null) {
            return cadena.replace(/\n/g, delimitador)
        }
        return cadena
    },
    negativosError: (numeros) => {
        if ( (numeros.filter(value=> parseInt(value) < 0) !== [] ) ) {
            throw 'error numeros negativos'
        } else {
            return numeros
        }

    }
}
module.exports = stringCalculator;