module.exports = app => {
    const router = app.server.Router();

    router

        .get('/',
            app.actions.models.list.expose()
        )

        .get('/:id',
            app.actions.models.show.expose()
        )

        .get('/search',
            app.actions.models.search.expose()
        )

        .get('/count',
            app.actions.models.count.expose()
        )

        .post('/',
            app.actions.models.create.expose()
        )

        .put('/',
            app.actions.models.update.expose()
        )

        .delete('/',
            app.actions.models.remove.expose()
        );

    app.server.use('models', router);
};