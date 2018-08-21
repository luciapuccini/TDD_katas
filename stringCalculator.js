const stringCalculator = {
    add: (cadena) => {
        if (cadena === "") {
            return 0
        } else if (cadena.includes(",")) {
            numeros = cadena.split(",")

            let suma = 0;
            for (let i in numeros) {
                suma += parseInt(numeros[i]);
            }
            return suma
        } else {
            return parseInt(cadena)
        }

    }
}
module.exports = stringCalculator;