const MainPage = {
    index: {
        handler: function (request, h) {
            return h.file('./app/views/main.html');
        },
    },
    sprints: {
        handler: function (request, h) {
            return h.file('./app/views/sprints.html');
        },
    },
    data: {
        handler: function (request, h) {
            return h.file('./app/views/data.html');
        },
    },
    about: {
        handler: function (request, h) {
            return h.file('./app/views/about.html');
        },
    },
};

module.exports = MainPage;