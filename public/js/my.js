function Account(data) {
    var self = this;
    self.id = ko.observable(data.id);
    self.name = ko.observable(data.name);
    self.balance = ko.observable(data.balance);
}

function AccountViewModel () {
    var self = this;

    var a1 = new Account({id: 1,name: "Name1",balance: 10000});
    var a2 = new Account({id:2,name: "Name2",balance: 20000});
    var a3 = new Account({id:3,name: "Name3",balance: 30000});

    self.Accounts = ko.observableArray([a1,a2,a3]);
    self.newName = ko.observable();
    self.newId = ko.observable();
    self.newBalance = ko.observable();

    self.addNewAccount = function(){
        self.Accounts.push(new Account({id : this.newId(), name: this.newName(), balance: this.newBalance() }));
        self.newName("");
        self.newId("");
        self.newBalance("");
    };


}



ko.applyBindings(new AccountViewModel());