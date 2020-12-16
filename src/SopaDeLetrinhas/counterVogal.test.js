const contarVogais = require("./counterVogal");

describe('Contar vogais', () => {
    test('Deve contar as vogais e retornar 4', () => {
        let resultado = contarVogais("foguete");

        expect(resultado).toEqual(4)
    });

    test('Deve contar as vogais, independente de ser maiúsculas ou minúsculas e retornar 5', () => {
        let resultado = contarVogais("PrOxImO nIvEl!")

        expect(resultado).toEqual(5);
    });

    test('Deve retornar um erro', () => {
        let resultado = contarVogais(5)

        expect(resultado.message).toEqual("O argumento não é uma String.");
    });
});