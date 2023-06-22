//Implemente a função 'convertToInt' que Converta uma string para um 
//número inteiro
//Implemente a função 'convertToString' que Converta um número inteiro
//para uma string
//Implemente a função 'convertToBoolean' que Converta um valor para 
//um booleano

// Converte uma string para um número inteiro
function convertToInt(string) {
    let conversao = parseInt(string)
    return conversao
}

// Converte um número inteiro para uma string
function convertToString(number) {
    let conversao = toString(number)
    return conversao
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    let conversao = Boolean(value)
    return conversao
}

