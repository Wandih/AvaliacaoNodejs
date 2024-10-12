const express = require ('express')
const ControllerApi = require ('../controller/api')

const router = express.Router();

router.post('/api/adicao', ControllerApi.Adicao)
router.post('/api/subtracao', ControllerApi.Subtracao)
router.post('/api/multiplicacao', ControllerApi.Multiplicacao)
router.post('/api/divisao', ControllerApi.Divisao)
router.post('/api/potenciacao', ControllerApi.Potenciacao)
router.post('/api/radiciacao', ControllerApi.Radiciacao)
router.get('/api/operacoes', ControllerApi.Operacoes)


module.exports = router