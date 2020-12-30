var ViewModel = function() {

    this.clickCount = ko.observable(0);
    this.name = ko.observable('Mittens');
    this.img = ko.observable('img/mittens.jpg');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    }

    this.level1 = ko.computed(function() {
        return this.clickCount() <5;
    }, this);

    this.level2 = ko.computed(function() {
        return this.clickCount() >=5 && this.clickCount() <=10;
    }, this);

    this.level3 = ko.computed(function() {
        return this.clickCount() >10;
    }, this);


}

ko.applyBindings(new ViewModel())