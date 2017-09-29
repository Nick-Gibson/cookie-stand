'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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

var storeForm = document.getElementById('storeForm');
function addNewLine(event) {
  event.preventDefault();
  // if (!event.target.location.value || !event.target.minCust.value || event.target.maxCust.value || event.target.cookiesPerCustomer.value) {
  //   return alert('Please enter a value for all fields');
  // };
  var newStoreName = event.target.location.value;
  var newMinCust = parseInt(event.target.minCust.value);
  var newMaxCust = parseInt(event.target.maxCust.value);
  var newCookiesPerHour = parseFloat(event.target.cookiesPerCustomer.value);
  storeArray.push(new Store(newStoreName, newMinCust, newMaxCust, newCookiesPerHour));
  storeArray[(storeArray.length) - 1].customersPerHourCalculation();
  storeArray[(storeArray.length) - 1].cookiesPerDayCalculation();
  var trEl = document.createElement('tr');
  var tableHead = document.getElementById('salesTable');
  trEl.textContent = '';
  tableHead.appendChild(trEl);
  //then create a new <th> from the array
  var thEl = document.createElement('th');
  thEl.textContent = storeArray[(storeArray.length) - 1].nameStore;
  tableHead.appendChild(thEl);
  //then iterate through the nested array of values and place in table
  for (var i in hours.length){
    var tdEl = document.createElement('td');
    tdEl.textContent = storeArray[(storeArray.length) - 1].cookiesPerHour[i];
    tableHead.appendChild(tdEl);
  };
  tdEl.textContent = storeArray[(storeArray.length) - 1].cookiesDayTotal;
  tableHead.appendChild(tdEl);
};
storeForm.addEventListener('submit', addNewLine);
