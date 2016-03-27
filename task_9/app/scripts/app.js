(function() {
    require.config({
        urlArgs: "v=0.01",
        paths: {
            jquery: '../lib/jquery/dist/jquery.min',
            underscore: "../lib/underscore/underscore-min",
            checkStorage: "modules/partials/checkStorage",
            clickHandler: "modules/partials/clickHandler"
        },

        "shim": {
            "../lib/jquery/dist/jquery.min": {
                "exports": "$"
            },
            "../lib/underscore/underscore-min": {
                "exports": "_"
            },
            "modules/partials/checkStorage": {
                "exports": "cS"
            },
            "modules/partials/clickHandler": {
                "exports": "cH"
            }
        }
    });
    define(["modules/main"]);
})();