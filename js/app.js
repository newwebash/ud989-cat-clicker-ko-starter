var Cat = function(data) {

    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.img = ko.observable(data.img);
    this.nicknames = ko.observableArray(data.nicknames);
   
    this.level = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 5) {
            title = "Newborn";
        } else if (clicks < 10 ) {
            title = "Infant";
        } else if (clicks >= 10) {
            title = "Child";
        }
        return title;
    }, this);

}

var ViewModel = function() {  

    var initialCats = [
        {
            clickCount: 0,
            name: "Mittens",
            img: "img/mittens.jpg",
            nicknames: [ "Pippo", "Pillo", "'Murica", "Zebretta" ]
        },
        {
            clickCount: 0,
            name: "Sylvester",
            img: "img/sylvester.jpg",
            nicknames: ["Silvio"]
        },
        {
            clickCount: 0,
            name: "Bilbo",
            img: "img/bilbo.jpg",
            nicknames: ["Billy boy"]
        },
        {
            clickCount: 0,
            name: "Jazzy",
            img: "img/jazzy.jpg",
            nicknames: ["Jazz a bell"]
        },
        {
            clickCount: 0,
            name: "Ometto",
            img: "img/ometto.jpg",
            nicknames: ["Uomo", "Omettino", "Bimbo"]
        }
    ];

    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0]);

    this.setCurrentCat = function(cat) {
        self.currentCat(cat);
    }

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }    

}

ko.applyBindings(new ViewModel())