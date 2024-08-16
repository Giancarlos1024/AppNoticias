const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Datos estáticos de prueba
const users = {
    'lucia': 'lucia159' // Usuario y contraseña de prueba
};

// Datos del perfil estático
const profile = {
    name: 'lucia Doe',
    email: 'lucia@gmail.com'
};

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta de autenticación
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    
    // Verifica si el usuario y la contraseña coinciden
    if (users[username] && users[username] === password) {
        const token = jwt.sign({ username }, 'secret-key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Ruta para obtener perfil
app.get('/api/profile', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extrae el token del header
    if (token) {
        try {
            jwt.verify(token, 'secret-key'); // Verifica el token
            res.json(profile); // Envia el perfil estático
        } catch (error) {
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
