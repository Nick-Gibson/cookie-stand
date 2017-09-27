'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeList = [];

var storeArray = [];
storeArray.push(new Store('Pike', 23, 65, 6.3));
storeArray.push(new Store('seaTac', 3, 24, 1.2));
storeArray.push(new Store('center', 11, 38, 3.7));
storeArray.push(new Store('hill', 20, 38, 2.3));
storeArray.push(new Store('Alki', 2, 16, 4.6));

function Store(nameStore, minCust, maxCust, cookiesPerCustomer){
  this.nameStore = nameStore;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.cookiesPerHour = [];
  this.cookiesDayTotal = 0;
  storeList.push(this);
}

Store.prototype.customersPerHourCalculation = function(){
  for (var i = 0; i < hours.length; i++){
    var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
    this.cookiesPerHour.push(x);
  }
};

Store.prototype.cookiesPerDayCalculation = function(){
  for (var i = 0; i < hours.length; i++) {
    this.cookiesDayTotal += this.cookiesPerHour[i];
  };
  return this.cookiesDayTotal;
};

var header = function(){
//create the first table row based on values in hours array
  var trElHours = document.createElement('tr');
  var tableHead = document.getElementById('salesTable');
  tableHead.appendChild(trElHours);
  var thElHours = document.createElement('th');
  thElHours.textContent = null;
  trElHours.appendChild(thElHours);
  for (var i = 0; i <= hours.length; i++){
    thElHours = document.createElement('th');
    thElHours.textContent = hours[i];
    trElHours.appendChild(thElHours);
  };
  thElHours.textContent = 'Daily Total';
  trElHours.appendChild(thElHours);
};

var mainRows = function(){
  for (var i = 0; i < storeArray.length; i++){
    //first create a new table row
    var trEl = document.createElement('tr');
    var tableHead = document.getElementById('salesTable');
    trEl.textContent = '';
    tableHead.appendChild(trEl);
    //then create a new <th> from the array
    var thEl = document.createElement('th');
    thEl.textContent = storeArray[i].nameStore;
    tableHead.appendChild(thEl);
    //then iterate through the nested array of values and place in table
    for (var j = 0; j <= storeArray[i].cookiesPerHour.length; j++){
      var tdEl = document.createElement('td');
      tdEl.textContent = storeArray[i].cookiesPerHour[j];
      tableHead.appendChild(tdEl);
    };
    tdEl.textContent = storeArray[i].cookiesDayTotal;
    tableHead.appendChild(tdEl);
  }
};

var calculations = function(){
  for (var i in storeArray){
    storeArray[i].customersPerHourCalculation();
    storeArray[i].cookiesPerDayCalculation();
  }
};
calculations();
header();
mainRows();
// header();
//   var liElTotal = document.createElement('li');
//   liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
//   var pikeTotals = document.getElementById('pike');
//   pikeTotals.appendChild(liElTotal);
// }
// Store.prototype.customersPerHourCalculation(10, 5);
// console.table(storeList);
// var pike = {
//   minCust: 23,
//   maxCust: 65,
//   cookiesPerCustomer: 6.3,
//   cookiesPerHour: [],
//   customersPerHourCalculation: function(){
//     for (var i = 0; i < hours.length; i++){
//       var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
//       this.cookiesPerHour.push(x);
//     };
//   },
//   cookiesDayTotal: 0,
//   cookiesPerDayCalculation: function(){
//     for (var i = 0; i < hours.length; i++) {
//       this.cookiesDayTotal += this.cookiesPerHour[i];
//     }
//     return this.cookiesDayTotal;
//   },
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var liElHours = document.createElement('li');
//       liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
//       var pikeUl = document.getElementById('pike');
//       pikeUl.appendChild(liElHours);
//     };
//     var liElTotal = document.createElement('li');
//     liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
//     var pikeTotals = document.getElementById('pike');
//     pikeTotals.appendChild(liElTotal);
//   }
// };
//
// var seaTac = {
//   minCust: 3,
//   maxCust: 24,
//   cookiesPerCustomer: 1.2,
//   cookiesPerHour: [],
//   customersPerHourCalculation: function(){
//     for (var i = 0; i < hours.length; i++){
//       var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
//       this.cookiesPerHour.push(x);
//     };
//   },
//   cookiesDayTotal: 0,
//   cookiesPerDayCalculation: function(){
//     for (var i = 0; i < hours.length; i++) {
//       this.cookiesDayTotal += this.cookiesPerHour[i];
//     }
//     return this.cookiesDayTotal;
//   },
// render: function(){
//   for (var i = 0; i < hours.length; i++){
//     var liElHours = document.createElement('li');
//     liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
//     var seaTacUl = document.getElementById('seaTac');
//     seaTacUl.appendChild(liElHours);
//   };
//     var liElTotal = document.createElement('li');
//     liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
//     var seaTacTotals = document.getElementById('seaTac');
//     seaTacTotals.appendChild(liElTotal);
//   }
// };
//
// var center = {
//   minCust: 11,
//   maxCust: 38,
//   cookiesPerCustomer: 3.7,
//   cookiesPerHour: [],
//   customersPerHourCalculation: function(){
//     for (var i = 0; i < hours.length; i++){
//       var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
//       this.cookiesPerHour.push(x);
//     };
//   },
//   cookiesDayTotal: 0,
//   cookiesPerDayCalculation: function(){
//     for (var i = 0; i < hours.length; i++) {
//       this.cookiesDayTotal += this.cookiesPerHour[i];
//     }
//     return this.cookiesDayTotal;
//   },
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var liElHours = document.createElement('li');
//       liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
//       var centerUl = document.getElementById('center');
//       centerUl.appendChild(liElHours);
//     };
//     var liElTotal = document.createElement('li');
//     liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
//     var centerTotals = document.getElementById('center');
//     centerTotals.appendChild(liElTotal);
//   }
// };
// var hill = {
//   minCust: 20,
//   maxCust: 38,
//   cookiesPerCustomer: 2.3,
//   cookiesPerHour: [],
//   customersPerHourCalculation: function(){
//     for (var i = 0; i < hours.length; i++){
//       var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
//       this.cookiesPerHour.push(x);
//     };
//   },
//   cookiesDayTotal: 0,
//   cookiesPerDayCalculation: function(){
//     for (var i = 0; i < hours.length; i++) {
//       this.cookiesDayTotal += this.cookiesPerHour[i];
//     }
//     return this.cookiesDayTotal;
//   },
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var liElHours = document.createElement('li');
//       liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
//       var hillUl = document.getElementById('hill');
//       hillUl.appendChild(liElHours);
//     };
//     var liElTotal = document.createElement('li');
//     liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
//     var hillTotals = document.getElementById('hill');
//     hillTotals.appendChild(liElTotal);
//   }
// };
// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   cookiesPerCustomer: 4.6,
//   cookiesPerHour: [],
//   customersPerHourCalculation: function(){
//     for (var i = 0; i < hours.length; i++){
//       var x = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.cookiesPerCustomer);
//       this.cookiesPerHour.push(x);
//     };
//   },
//   cookiesDayTotal: 0,
//   cookiesPerDayCalculation: function(){
//     for (var i = 0; i < hours.length; i++) {
//       this.cookiesDayTotal += this.cookiesPerHour[i];
//     }
//     return this.cookiesDayTotal;
//   },
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var liElHours = document.createElement('li');
//       liElHours.textContent = hours[i] + ':' + this.cookiesPerHour[i];
//       var alkiUl = document.getElementById('alki');
//       alkiUl.appendChild(liElHours);
//     };
//     var liElTotal = document.createElement('li');
//     liElTotal.textContent = 'Daily total: ' + this.cookiesDayTotal;
//     var alkiTotals = document.getElementById('alki');
//     alkiTotals.appendChild(liElTotal);
//   }
// };
//
// pike.customersPerHourCalculation();
// pike.cookiesPerDayCalculation();
// pike.render();
// seaTac.customersPerHourCalculation();
// seaTac.cookiesPerDayCalculation();
// seaTac.render();
// center.customersPerHourCalculation();
// center.cookiesPerDayCalculation();
// center.render();
// hill.customersPerHourCalculation();
// hill.cookiesPerDayCalculation();
// hill.render();
// alki.customersPerHourCalculation();
// alki.cookiesPerDayCalculation();
// alki.render();

// console.log(pike.cookiesPerHour);
// console.log(pike.cookiesDayTotal);
// console.log(seaTac.cookiesPerHour);
