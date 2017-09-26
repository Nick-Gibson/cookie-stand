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
  cookiesDayTotal: 0,
  cookiesPerDayCalculation: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesDayTotal += this.cookiesPerHour[i];
    }
    return this.cookiesDayTotal;
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liElHours = document.createElement('li');
      liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
      var pikeUl = document.getElementById('pike');
      pikeUl.appendChild(liElHours);
    };
    var liElTotal = document.createElement('li');
    liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
    var pikeTotals = document.getElementById('pike');
    pikeTotals.appendChild(liElTotal);
  }
};

var seaTac = {
  minCust: 3,
  maxCust: 24,
  cookiesPerCustomer: 1.2,
  cookiesPerHour: [],
  customersPerHourCalculation: function(){
    for (var i = 0; i < hours.length; i++){
      var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
      this.cookiesPerHour.push(x);
    };
  },
  cookiesDayTotal: 0,
  cookiesPerDayCalculation: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesDayTotal += this.cookiesPerHour[i];
    }
    return this.cookiesDayTotal;
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liElHours = document.createElement('li');
      liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
      var seaTacUl = document.getElementById('seaTac');
      seaTacUl.appendChild(liElHours);
    };
    var liElTotal = document.createElement('li');
    liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
    var seaTacTotals = document.getElementById('seaTac');
    seaTacTotals.appendChild(liElTotal);
  }
};

var center = {
  minCust: 11,
  maxCust: 38,
  cookiesPerCustomer: 3.7,
  cookiesPerHour: [],
  customersPerHourCalculation: function(){
    for (var i = 0; i < hours.length; i++){
      var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
      this.cookiesPerHour.push(x);
    };
  },
  cookiesDayTotal: 0,
  cookiesPerDayCalculation: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesDayTotal += this.cookiesPerHour[i];
    }
    return this.cookiesDayTotal;
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liElHours = document.createElement('li');
      liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
      var centerUl = document.getElementById('center');
      centerUl.appendChild(liElHours);
    };
    var liElTotal = document.createElement('li');
    liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
    var centerTotals = document.getElementById('center');
    centerTotals.appendChild(liElTotal);
  }
};
var hill = {
  minCust: 20,
  maxCust: 38,
  cookiesPerCustomer: 2.3,
  cookiesPerHour: [],
  customersPerHourCalculation: function(){
    for (var i = 0; i < hours.length; i++){
      var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
      this.cookiesPerHour.push(x);
    };
  },
  cookiesDayTotal: 0,
  cookiesPerDayCalculation: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesDayTotal += this.cookiesPerHour[i];
    }
    return this.cookiesDayTotal;
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liElHours = document.createElement('li');
      liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
      var hillUl = document.getElementById('hill');
      hillUl.appendChild(liElHours);
    };
    var liElTotal = document.createElement('li');
    liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
    var hillTotals = document.getElementById('hill');
    hillTotals.appendChild(liElTotal);
  }
};
var alki = {
  minCust: 2,
  maxCust: 16,
  cookiesPerCustomer: 4.6,
  cookiesPerHour: [],
  customersPerHourCalculation: function(){
    for (var i = 0; i < hours.length; i++){
      var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
      this.cookiesPerHour.push(x);
    };
  },
  cookiesDayTotal: 0,
  cookiesPerDayCalculation: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesDayTotal += this.cookiesPerHour[i];
    }
    return this.cookiesDayTotal;
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liElHours = document.createElement('li');
      liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
      var alkiUl = document.getElementById('alki');
      alkiUl.appendChild(liElHours);
    };
    var liElTotal = document.createElement('li');
    liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
    var alkiTotals = document.getElementById('alki');
    alkiTotals.appendChild(liElTotal);
  }
};

pike.customersPerHourCalculation();
pike.cookiesPerDayCalculation();
pike.render();
seaTac.customersPerHourCalculation();
seaTac.cookiesPerDayCalculation();
seaTac.render();
center.customersPerHourCalculation();
center.cookiesPerDayCalculation();
center.render();
hill.customersPerHourCalculation();
hill.cookiesPerDayCalculation();
hill.render();
alki.customersPerHourCalculation();
alki.cookiesPerDayCalculation();
alki.render();
// console.log(pike.cookiesPerHour);
// console.log(pike.cookiesDayTotal);
// console.log(seaTac.cookiesPerHour);
