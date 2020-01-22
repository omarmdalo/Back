module.exports = {
    appName: 'PortalKia',
    urlLocal: `http://localhost:${process.env.PORT || 3000}/`,
    codloc: 'SCL',
    dircom: 'AV LAS CONDES 11754',
    comuna: 'SANTIAGO',
    sequelizeconf: {
        database: 'PortalKia',
        user: 'user_data_w',
        password: 'indu.2020_w',
        host: '172.19.22.128',
        server: {
            host: '172.19.22.128\\INDDATAMARTS',
            dialect: 'mssql',
            port: '1433',
            driver: 'tedious',
            define: {
                timestamps: false
            },
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
    }
};