const {describe, it, expect} = require('@jest/globals')
const ServiceApi = require('../src/services/api')

describe("Testando função Operações", () => {

    it("ditando um número positivo", () => {

        const result = ServiceApi.Operacao(1)

        expect(result).toStrictEqual([
            "Soma: Soma dois números", 
            "Subtração: Subtrai dois números", 
            "Multiplicação: Multiplica dois números", 
            "Divisão: Divide dois números", 
            "Potenciação = Multplica um número por ele mesmo um determinado número de vezes", 
            "Radiciação = Define a raíz de um determinado número"
        ])

    })

    it("ditando um número negativo", () => {

        const result = ServiceApi.Operacao(-1)

        expect(result).toStrictEqual([
            "Soma: Soma dois números", 
            "Subtração: Subtrai dois números", 
            "Multiplicação: Multiplica dois números", 
            "Divisão: Divide dois números", 
            "Potenciação = Multplica um número por ele mesmo um determinado número de vezes", 
            "Radiciação = Define a raíz de um determinado número"
        ])

    })

    it("ditando uma letra", () => {

        const result = () => ServiceApi.Operacao("a")

        expect(result).toThrow("Utilize apenas números")

    })

})

describe("Testando função Soma", () => {

    it("somando dois números positivos", () => {

        const result = ServiceApi.Soma(1, 2)

        expect(result).toBe(3)

    })

    it("somando 1 número positivo e um negativo", () => {

        const result = ServiceApi.Soma(1, -2)

        expect(result).toBe(-1)

    })

    it("somando dois números negativos", () => {

        const result = ServiceApi.Soma(-1, -2)

        expect(result).toBe(-3)

    })

    it("somando 1 número negativo e 1 positivo", () => {

        const result = ServiceApi.Soma(-1, 2)

        expect(result).toBe(1)

    })

    it("somando 1 número inteiro com 1 número com vírgula", () => {

        const result = ServiceApi.Soma(1, 2.25)

        expect(result).toBe(3.25)

    })

    it("somando 2 números com vírgula", () => {

        const result = ServiceApi.Soma(2.25, 2.25)

        expect(result).toBe(4.5)

    })

    it("somando 1 número inteiro negativo com 1 número com vírgula", () => {

        const result = ServiceApi.Soma(-1, 2.25)

        expect(result).toBe(1.25)

    })

    it("somando 1 número inteiro negativo com 1 número negativo com vírgula", () => {

        const result = ServiceApi.Soma(-1, -2.25)

        expect(result).toBe(-3.25)

    })

    it("somando 2 números negativos com vírgula", () => {

        const result = ServiceApi.Soma(-1.75, -2.25)

        expect(result).toBe(-4)

    })

    it("somando 1 número e uma letra", () => {

        const result = () => ServiceApi.Soma(1, "a")

        expect(result).toThrow('Utilize apenas números')

    })

    it("somando 1 letra e um número", () => {

        const result = () => ServiceApi.Soma("a", 1)

        expect(result).toThrow('Utilize apenas números')

    })

    it("somando duas letras", () => {

        const result = () => ServiceApi.Soma("a", "b")

        expect(result).toThrow('Utilize apenas números')

    })

})

describe("Testando função Subtração", () => {

    it("subtraindo dois números positivos", () => {

        const result = ServiceApi.Subtracao(1, 2)

        expect(result).toBe(-1)

    })

    it("subtraindo 1 número positivo e um negativo", () => {

        const result = ServiceApi.Subtracao(1, -2)

        expect(result).toBe(3)

    })

    it("subtraindo dois números negativos", () => {

        const result = ServiceApi.Subtracao(-1, -2)

        expect(result).toBe(1)

    })

    it("subtraindo 1 número e uma letra", () => {

        const result = () => ServiceApi.Subtracao(1, "a")

        expect(result).toThrow('Utilize apenas números')

    })

    it("subtraindo 1 letra e um número", () => {

        const result = () => ServiceApi.Subtracao("a", 1)

        expect(result).toThrow('Utilize apenas números')

    })

    it("subtraindo duas letras", () => {

        const result = () => ServiceApi.Subtracao("a", "b")

        expect(result).toThrow('Utilize apenas números')

    })

})

describe("Testando função Multiplicação", () => {

    it("multiplicando dois números positivos", () => {

        const result = ServiceApi.Multiplicacao(1, 2)

        expect(result).toBe(2)

    })

    it("multiplicando 1 número positivo e um negativo", () => {

        const result = ServiceApi.Multiplicacao(1, -2)

        expect(result).toBe(-2)

    })

    it("multiplicando dois números negativos", () => {

        const result = ServiceApi.Multiplicacao(-1, -2)

        expect(result).toBe(2)

    })

    it("multiplicando 1 número e uma letra", () => {

        const result = () => ServiceApi.Multiplicacao(1, "a")

        expect(result).toThrow('Utilize apenas números')

    })

    it("multiplicando 1 letra e um número", () => {

        const result = () => ServiceApi.Multiplicacao("a", 1)

        expect(result).toThrow('Utilize apenas números')

    })

    it("multiplicando duas letras", () => {

        const result = () => ServiceApi.Multiplicacao("a", "b")

        expect(result).toThrow('Utilize apenas números')

    })

})

describe("Testando função Divisão", () => {

    it("dividindo dois números positivos", () => {

        const result = ServiceApi.Divisao(2, 2)

        expect(result).toBe(1)

    })

    it("dividindo 1 número positivo e um negativo", () => {

        const result = ServiceApi.Divisao(-2, 1)

        expect(result).toBe(-2)

    })

    it("dividindo dois números negativos", () => {

        const result = ServiceApi.Divisao(-2, -1)

        expect(result).toBe(2)

    })

    it("dividindo 1 número e uma letra", () => {

        const result = () => ServiceApi.Divisao(1, "a")

        expect(result).toThrow('Utilize apenas números')

    })

    it("dividindo 1 letra e um número", () => {

        const result = () => ServiceApi.Divisao("a", 1)

        expect(result).toThrow('Utilize apenas números')

    })

    it("dividindo duas letras", () => {

        const result = () => ServiceApi.Divisao("a", "b")

        expect(result).toThrow('Utilize apenas números')

    })

})

describe("Testando função Potenciação", () => {

    it("elevando 1 número positivo a determinada potência", () => {

        const result = ServiceApi.Multiplicacao(2, 2)

        expect(result).toBe(4)

    })

    it("elevando 1 número positivo a uma potência negativa", () => {

        const result = ServiceApi.Multiplicacao(2, -2)

        expect(result).toBe(-4)

    })

    it("elevando 1 número negativo a uma potência positiva", () => {

        const result = ServiceApi.Multiplicacao(-2, -2)

        expect(result).toBe(4)

    })

    it("elevando 1 número e uma letra", () => {

        const result = () => ServiceApi.Multiplicacao(1, "a")

        expect(result).toThrow('Utilize apenas números')

    })

    it("elevando 1 letra a determinada potência", () => {

        const result = () => ServiceApi.Multiplicacao("a", 1)

        expect(result).toThrow('Utilize apenas números')

    })

    it("elevando 1 letra a determina potência (letra)", () => {

        const result = () => ServiceApi.Multiplicacao("a", "b")

        expect(result).toThrow('Utilize apenas números')

    })

})

describe("Testando função Radiciação", () => {

    it("raíz quadrada de um número positivo", () => {

        const result = ServiceApi.Raiz(4)

        expect(result).toBe(2)

    })

    it("raíz quadrada 1 número negativo", () => {

        const result = () => ServiceApi.Raiz(-4)

        expect(result).toThrow('Utilize um número válido')

    })


    it("raíz quadrada de uma letra", () => {

        const result = () => ServiceApi.Raiz("a")

        expect(result).toThrow('Utilize apenas números')

    })

  

})