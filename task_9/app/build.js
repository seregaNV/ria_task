({
    baseUrl: "./",
    appDir: "./scripts",
    dir: "./build",
    paths: {
        jquery: "../lib/jquery/dist/jquery.min",
        underscore: "../lib/underscore/underscore-min",
        checkStorage: "modules/partials/checkStorage",
        clickHandler: "modules/partials/clickHandler"
    },
    wrapShim: true,
    mainConfigFile: 'scripts/app.js',
    modules: [
        {
            name: "modules/main",
            exclude: ["jquery", "underscore"]
        }
    ]
})