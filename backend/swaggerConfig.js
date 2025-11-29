
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', 
        info: {
            title: 'Dummy Backend API Documentation',
            version: '1.0.0',
            description: 'Dokumentasi untuk endpoint API backend dummy.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Server Pengembangan Lokal',
            },
        ],
    },
    apis: ['./server.js'],
};

module.exports = swaggerOptions;