// Requires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tedious = require('tedious');
const Sequelize = require('sequelize');
const ConfSequelize = require('./config/index');


// Inicializar variables
var app = express();


// CORS
app.use(cors());


// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Importar rutas
var appRoutes = require('./routes/app');

// var usuarioRoutes = require('./routes/usuario');
// var loginRoutes = require('./routes/login');
// var hospitalRoutes = require('./routes/hospital');
// var medicoRoutes = require('./routes/medico');
// var busquedaRoutes = require('./routes/busqueda');
// var uploadRoutes = require('./routes/upload');
// var imagenesRoutes = require('./routes/imagenes');


// Server index config
// var serveIndex = require('serve-index');
// app.use(express.static(__dirname + '/'))
// app.use('/uploads', serveIndex(__dirname + '/uploads'));


// Rutas
// app.use('/usuario', usuarioRoutes);
// app.use('/hospital', hospitalRoutes);
// app.use('/medico', medicoRoutes);
// app.use('/login', loginRoutes);
// app.use('/busqueda', busquedaRoutes);
// app.use('/upload', uploadRoutes);
// app.use('/img', imagenesRoutes);
app.use('/', appRoutes);

const sequelize = new Sequelize(
    ConfSequelize.sequelizeconf.database,
    ConfSequelize.sequelizeconf.user,
    ConfSequelize.sequelizeconf.password, {
        host: ConfSequelize.sequelizeconf.host,
        dialect: 'mssql',
        port: '1433',
        driver: 'tedious',
        dialectOptions: {
            instanceName: MSSQLSERVER
        },
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// Escuchar peticiones
app.listen(3001, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});