const express = require('express');
const router = express.Router();
const {getPacientes, addPaciente, udatePaciente, deletePaciente} = require('../controllers/pacienteController');

//Rutas para pacientes 
router.get('/', getPacientes);
router.post('/', addPaciente);
router.put('/:id', udatePaciente);
router.delete('/:id', deletePaciente);

module.exports = router;