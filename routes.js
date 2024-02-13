const Controller = require('./app/controllers/controller.js');

module.exports = [
    { method: 'GET', path: '/', config: Controller.index },
    { method: 'GET', path: '/sprints', config: Controller.sprints },
    { method: 'GET', path: '/data', config: Controller.data },
    { method: 'GET', path: '/about', config: Controller.about },
    {
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: "./public"
            }
        },
        options: { auth: false }
    },
];