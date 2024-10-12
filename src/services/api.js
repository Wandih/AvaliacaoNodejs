class ServiceProva {

    Soma (num1, num2){

        if(isNaN(num1) || isNaN (num2)){

            throw new Error('Utilize apenas números')
        }

        return num1 + num2
    }

    Subtracao (num1, num2){

        if(isNaN(num1) || isNaN (num2)){

            throw new Error('Utilize apenas números')
        }

        return num1 - num2
    }

    Multiplicacao (num1, num2){

        if(isNaN(num1) || isNaN (num2)){

            throw new Error('Utilize apenas números')
        }

        return num1 * num2
    }

    Divisao (num1, num2){

        if(isNaN(num1) || isNaN (num2)){

            throw new Error('Utilize apenas números')
        }

        return num1 / num2
    }

    Potencia (num1, num2){

        if(isNaN(num1) || isNaN (num2)){

            throw new Error('Utilize apenas números')
        }

        return Math.pow(num1, num2)
    }

    Raiz (num1){

        if(isNaN(num1)){

            throw new Error('Utilize apenas números')
        }

        if(num1 < 0){

            throw new Error('Utilize um número válido')
        }
        
        return Math.sqrt(num1)
    }

    

    Operacao(num1){

        if(isNaN(num1)){

            throw new Error('Utilize apenas números')

        }

        const lista = [

                "Soma: Soma dois números",
                "Subtração: Subtrai dois números",
                "Multiplicação: Multiplica dois números",
                "Divisão: Divide dois números",
                "Potenciação = Multplica um número por ele mesmo um determinado número de vezes",
                "Radiciação = Define a raíz de um determinado número"
            ]

        return lista

            
        
    }

    

}

module.exports = new ServiceProva()