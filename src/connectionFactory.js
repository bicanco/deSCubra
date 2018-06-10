var postgres  = require('pg');

function createDBConnection(){
        return pg.createConnection({
            host: 'db', 
            port: 10,
            database: 'deSCubra',
            user: 'username',
            password: 'pass'
        });
}

module.exports = function() {
    return createDBConnection;
}