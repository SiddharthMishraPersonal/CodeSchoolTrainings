(function () {
    var app = angular.module('store', []);

    var gems = [{
            name: "Dodecahedron",
            price: 334.95,
            description: "It is very good gem. Some gem have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems",
            canPurchase: true,
            soldOut: false
    },
        {
            name: "Pentagonal Gem",
            price: 1245.95,
            description: "It is Pentagonal in shape.",
            canPurchase: true,
            soldOut: false
    },
        {
            name: "Sapphire",
            price: 2000.95,
            description: "Most costly gem.",
            canPurchase: true,
            soldOut: false
    }];

    app.controller('StoreController', function () {
        this.products = gems;
    });

})();
