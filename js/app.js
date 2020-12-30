var Cat = function() {

    this.clickCount = ko.observable(0);
    this.name = ko.observable('Mittens');
    this.img = ko.observable('img/mittens.jpg'); 

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

    this.nicknames = ko.observableArray([
        "Pippo", "Pillo", "'Murica", "Zebretta"
    ]);

}

var ViewModel = function() {  

    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    }


}

ko.applyBindings(new ViewModel())