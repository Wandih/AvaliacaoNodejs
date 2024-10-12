const ServiceApi = require('../services/api')

class ControllerApi{

    Adicao (req, res){

        try {

            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Soma(num1, num2)

            res.status(200).json({resultado})

        } catch (error) {
        
            console.error(error)
            res.status(400).json({message: error.message})

        }
    }

    Subtracao (req, res){

        try {

            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Subtracao(num1, num2)

            res.status(200).json({resultado})

        } catch (error) {

            console.error(error)
            res.status(400).json({message: error.message})
            
        }
    }


    Multiplicacao (req, res){

        try {

            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Multiplicacao(num1, num2)

            res.status(200).json({resultado})

        } catch (error) {

            console.error(error)
            res.status(400).json({message: error.message})
            
        }
    }


    Divisao (req, res){

        try {

            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Divisao(num1, num2)

            res.status(200).json({resultado})

        } catch (error) {

            console.error(error)
            res.status(400).json({message: error.message})
            
        }
    }


    Potenciacao (req, res){

        try {

            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Potencia(num1, num2)

            res.status(200).json({resultado})

        } catch (error) {

            console.error(error)
            res.status(400).json({message: error.message})
            
        }
    }


    Radiciacao (req, res){

        try {

            const num1 = req.body.num1

            const resultado = ServiceApi.Raiz(num1)

            res.status(200).json({resultado})

        } catch (error) {

            console.error(error)
            res.status(400).json({message: error.message})
            
        }
    }

    Operacoes (req, res){

        try {

            const num1 = req.body.num1

            const resultado = ServiceApi.Operacao(num1)

            res.status(200).json({resultado})

        } catch (error) {

            console.error(error)
            res.status(400).json({message: error.message})
            
        }
    }




}

module.exports = new ControllerApi()