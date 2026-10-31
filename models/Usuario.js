const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({
    nombreUsuario: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    rol: { type: String, required: true }
});

// Middleware para encriptar la contraseña antes de guardarla
UsuarioSchema.pre('save', async function() {
    // Si la contraseña NO ha cambiado, no hace nada y continúa
    if (!this.isModified('contraseña')) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
});

module.exports = mongoose.model('Usuario', UsuarioSchema);