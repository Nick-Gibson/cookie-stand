'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// console.log('literally anything');
//object literal to build sales projection to sales.html
var pike = {
  minCust: 23,
  maxCust: 65,
  cookiesPerCustomer: 6.3,
  cookiesPerHour: [],
  customersPerHourCalculation: function(){
    for (var i = 0; i < hours.length; i++){
      var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
      this.cookiesPerHour.push(x);
    };
  },
  cookiesPerDay: 0,
  cookiesPerDayCalculation: function(){
    var i = 0;
    while (i < hours.length) {
      this.cookiesPerHour[i] += this.cookiesPerDay;
      // console.log(this.cookiesPerDay);
      // console.log('am working');
      i++;
    }
  }
};
pike.customersPerHourCalculation();
pike.cookiesPerDayCalculation();
console.log(pike.cookiesPerHour);
console.log(pike.cookiesPerDay);
