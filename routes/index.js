module.exports = app => {
    app.server.use((req, res, next) => res.send('it works!'));
};
