define("modules/main", ["jquery", "underscore", "checkStorage", "clickHandler"],
    function($, _, checkStorage) {
        $.getJSON("/data/data.json", function (){})
            .done(function (data) {
                var $container = $('.container');
                _.each(data, function(elem){
                    var countValue, myStorage, $liElem, $imgElem, $spanElem;
                    countValue = elem.count;
                    if (checkStorage) {
                        myStorage = window.localStorage.getItem(elem.id);
                        if (myStorage >= 0) countValue = myStorage;
                    }
                    $liElem = $('<li/>', {class: "item", title: elem.title});
                    $imgElem = $('<img/>', {src: "/images/"+elem.image, alt: elem.title});
                    $spanElem = $('<span/>', {id: elem.id,class: "counter", text: Number(countValue)});
                    $liElem.append($imgElem, $spanElem);
                    $container.append($liElem);
                });
            })
            .fail(function () {
                console.error("Loading error!");
            });
    }
);