function contarVogais(palavra) {
    /**
     * Verifica se o tipo do argumento é String, caso não, retornar um erro.
     */
    if(typeof palavra != "string") return new Error("O argumento não é uma String.");


    /**
     * Pegar a palavra recebida, converter para minúsculo
     * e depois, remover todo o resto das letras exceto a, e, i, o e u.
     */
    let apenasVogais = palavra.toLowerCase().match(/a|e|i|o|u/g)

    /**
     * Pegar o comprimento da variável "apenasVogais" e retornar o comprimento da função.
     */
    return apenasVogais.length
}

module.exports = contarVogais