global.Action = require('idylle').Action;

const Core = require('idylle').Core;
const app  = new Core();

app
    // Initialization phases.
    .on(Core.events.init.settings,        require('./settings'))
    .on(Core.events.init.models,          require('./models'))
    .on(Core.events.init.middlewares,     require('./middlewares'))
    .on(Core.events.init.actions,         require('./actions'))
    .on(Core.events.init.routes,          require('./routes'))
    // Booting phases.
    .on(Core.events.booting,              require('./boot'))
    // Post Start.
    .on(Core.events.started, app => console.log(`Server listening on port ${app.settings.port}`))
    .start();

// Exposing the app allowing tests.
module.exports = app;
