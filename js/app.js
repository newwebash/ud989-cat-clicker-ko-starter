var ViewModel = function() {

    this.clickCount = ko.observable(0);
    this.name = ko.observable('Mittens');
    this.img = ko.observable('img/mittens.jpg');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    }
}

ko.applyBindings(new ViewModel())