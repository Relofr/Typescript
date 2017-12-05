class Invoice {
  companyProfile : string;

  constructor(public name, public city, public state) {
    this.companyProfile = name + " " + city + " " + state;
  }
}

var googleInvoice = new Invoice('Google', 'Orem', 'UT');
var yahooInvoice = new Invoice('Yahoo', 'SF', 'CA');

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);