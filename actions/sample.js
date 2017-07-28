module.exports = app => {
    return Action({
        execute: context => Promise.resolve('Hello, world')
    });
};