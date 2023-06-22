// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    let perimetro = ((retangulo.largura * 2) + (retangulo.altura * 2))
    let area = retangulo.largura * retangulo.altura
    let valorRetangulo = {
        perimetro: perimetro,
        area: area
    }
    return valorRetangulo 
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    if(pessoa.idade >= 18){
        return true
    }else{
        return false
    }
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    return `${obj.nome} ${obj.idade} ${obj.cidade}`
}
