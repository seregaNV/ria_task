define("clickHandler", ['jquery', "checkStorage"], function($, cS) {

    $('ul.container').on('click', 'li', function() {
        var $spanClick = $(this).find('span'),
            $storageKey = $spanClick.attr('id'),
            countValue = $spanClick.text();
        if (cS) {
            var myStorage = window.localStorage;
            if (myStorage.getItem($storageKey) >= 0) {
                countValue = myStorage.getItem($storageKey);
                myStorage.setItem($storageKey, Number(countValue) + 1);
            }
        }
        $spanClick.text(Number(countValue) +1);
    });

});