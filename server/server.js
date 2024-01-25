const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

// ruta para servir al cliente
app.get('/api/repositories/:username', async (req, res) => {
  const { username } = req.params;

// una vez extraido el username se consulta a la api de github
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=stars&per_page=10`);
    const repositories = response.data;
    res.json(repositories);
  } catch (error) {
    console.error('Error al obtener repositorios:', error.message);
    res.status(500).json({ error: 'Error al obtener repositorios' });
  }
});

app.listen(port, () => {
  console.log(`Servidor activo en el puerto: ${port}`);
});
