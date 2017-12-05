var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + " " + city + " " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'Orem', 'UT');
var yahooInvoice = new Invoice('Yahoo', 'SF', 'CA');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
//# sourceMappingURL=classes.js.map