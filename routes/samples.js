module.exports = app => {
    const router = app.Router();

    router.get('/',
        app.actions.sample.expose()
    );
};