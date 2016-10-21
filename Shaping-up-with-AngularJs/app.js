(function () {
    var app = angular.module('store', []);

    var gems = [{
            name: "Empty Gem",
            price: 12.95,
            description: "It is very good gem. Some gem have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems",
            canPurchase: true,
            soldOut: true,
            timeStamp: 1488123412323,
            images: [],
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
        },
                {
                    stars: 3,
                    body: "This product is O.K.!",
                    author: "test@example.com"
        },
                {
                    stars: 2,
                    body: "I hate this product!",
                    author: "none@anybody.com"
        }
                 ]
            },
        {
            name: "Pentagonal Gem",
            price: 1245.95,
            description: "It is Pentagonal in shape.",
            canPurchase: true,
            soldOut: false,
            specifications: "Not Yet done!",
            timeStamp: 1477123412323,
            images: [
                {
                    full: "assets/Pentagonal-Gem.jpg",
                    thumb: "assets/Pentagonal-Gem-Thumb.jpg"
        }, {
                    full: "assets/Dodecahedron-Gem.jpg",
                    thumb: "assets/Dodecahedron-Gem-Thumb.jpg"
        }],
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
        },
                {
                    stars: 3,
                    body: "This product is O.K.!",
                    author: "test@example.com"
        },
                {
                    stars: 2,
                    body: "I hate this product!",
                    author: "none@anybody.com"
        }
                 ]
            },
        {
            name: "Dodecahedron",
            price: 334.95,
            description: "It is very good gem. Some gem have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems",
            canPurchase: true,
            soldOut: true,
            timeStamp: 1488123412323,
            specifications: "Not Yet done!",
            images: [{
                full: "assets/Dodecahedron-Gem.jpg",
                thumb: "assets/Dodecahedron-Gem-Thumb.jpg"
        }, {
                full: "assets/Pentagonal-Gem.jpg",
                thumb: "assets/Pentagonal-Gem-Thumb.jpg"
                    }],
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
        },
                {
                    stars: 3,
                    body: "This product is O.K.!",
                    author: "test@example.com"
        },
                {
                    stars: 2,
                    body: "I hate this product!",
                    author: "none@anybody.com"
        }
                 ]
            },
        {
            name: "Pentagonal Gem",
            price: 1245.95,
            description: "It is Pentagonal in shape.",
            canPurchase: true,
            soldOut: false,
            timeStamp: 1477123412323,
            specifications: "Not Yet done!",
            images: [
                {
                    full: "assets/Pentagonal-Gem.jpg",
                    thumb: "assets/Pentagonal-Gem-Thumb.jpg"
        }, {
                    full: "assets/Dodecahedron-Gem.jpg",
                    thumb: "assets/Dodecahedron-Gem-Thumb.jpg"
        }],
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
        },
                {
                    stars: 3,
                    body: "This product is O.K.!",
                    author: "test@example.com"
        },
                {
                    stars: 2,
                    body: "I hate this product!",
                    author: "none@anybody.com"
        }
                 ]
            },
        {
            name: "Sapphire",
            price: 2000.95,
            description: "Most costly gem.",
            canPurchase: true,
            soldOut: false,
            timeStamp: 1466123412323,
            specifications: "Not Yet done!",
            images: [{
                full: "assets/Sapphire-Gem.jpg",
                thumb: "assets/Sapphire-Gem-Thumb.jpg"
        }, {
                full: "assets/Gold-Gem.jpg",
                thumb: "assets/Gold-Gem-Thumb.jpg"
        }, {
                full: "assets/Pentagonal-Gem.jpg",
                thumb: "assets/Pentagonal-Gem-Thumb.jpg"
        }, {
                full: "assets/Dodecahedron-Gem.jpg",
                thumb: "assets/Dodecahedron-Gem-Thumb.jpg"
        }],
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
        },
                {
                    stars: 3,
                    body: "This product is O.K.!",
                    author: "test@example.com"
        },
                {
                    stars: 2,
                    body: "I hate this product!",
                    author: "none@anybody.com"
        }
                 ]
            },
        {
            name: "Gold Gem",
            price: 3334.95,
            description: "It is very good gem. Some gem have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems",
            canPurchase: true,
            soldOut: true,
            timeStamp: 1488123412323,
            specifications: "Not Yet done!",
            images: [
                {
                    full: "assets/Gold-Gem.jpg",
                    thumb: "assets/Gold-Gem-Thumb.jpg"
        }, {
                    full: "assets/Pentagonal-Gem.jpg",
                    thumb: "assets/Pentagonal-Gem-Thumb.jpg"
        }, {
                    full: "assets/Sapphire-Gem.jpg",
                    thumb: "assets/Sapphire-Gem-Thumb.jpg"
        }],
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
        },
                {
                    stars: 3,
                    body: "This product is O.K.!",
                    author: "test@example.com"
        },
                {
                    stars: 2,
                    body: "I hate this product!",
                    author: "none@anybody.com"
        }
                 ]
            },
        {
            name: "Silver Gem",
            price: 145.95,
            description: "It is Pentagonal in shape.",
            canPurchase: true,
            soldOut: false,
            timeStamp: 1477123412323,
            specifications: "Not Yet done!",
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
        },
                {
                    stars: 3,
                    body: "This product is O.K.!",
                    author: "test@example.com"
        },
                {
                    stars: 2,
                    body: "I hate this product!",
                    author: "none@anybody.com"
        }
                 ]
            },
        {
            name: "Blue Sapphire",
            price: 1890.95,
            description: "Most costly gem.",
            canPurchase: true,
            soldOut: false,
            timeStamp: 1466123412323,
            specifications: "Not Yet done!",
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
        },
                {
                    stars: 3,
                    body: "This product is O.K.!",
                    author: "test@example.com"
        },
                {
                    stars: 2,
                    body: "I hate this product!",
                    author: "none@anybody.com"
        }
                 ],
            images: [
                {
                    full: "assets/Blue-Sapphire-Gem.jpg",
                    thumb: "assets/Blue-Sapphire-Gem-Thumb.jpg"
        }, {
                    full: "assets/Pentagonal-Gem.jpg",
                    thumb: "assets/Pentagonal-Gem-Thumb.jpg"
        }, {
                    full: "assets/Dodecahedron-Gem.jpg",
                    thumb: "assets/Dodecahedron-Gem-Thumb.jpg"
        }, {
                    full: "assets/Sapphire-Gem.jpg",
                    thumb: "assets/Sapphire-Gem-Thumb.jpg"
        }]
            }];

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('PanelController', function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

})();
