// create variable for a data from data.js
var tableData = data;

// create variable for a table body
var tableUfo = d3.select("#ufo-table");
var ufoBody = tableUfo.select("tbody");  
var oldInput = d3.select("input");
// Iterate thtough tableData, add function ufo to call each item
tableData.forEach(function(ufo) {
  // create rows for each data point
  var rowUfo = ufoBody.append("tr");
  // iterate through each object inside of array and pick values only
  Object.entries(ufo).forEach(function([key, value]) {
    // create cells for each data point and add values to it 
    var cellUfo = rowUfo.append("td");
     cellUfo.text(value);
  });
});

// Select button and form tags assign listener 



var selector = d3.select("#selFilter");
selector.on("change", changeFilter)

function changeFilter() {
    d3.event.preventDefault();
    var dropDownMenu = d3.select("#selFilter");
    var newFilter = dropDownMenu.node().value;
    var listInput = d3.select(".list-group-item");
    var newInput = listInput.append('input');
    var oldInput = d3.select("input");

    switch(newFilter) {
        case "newFilter2":
            oldInput.remove();
            newInput.attr("class", "form-control");
            newInput.attr("id", "city");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "city");
            break;
        case "newFilter3":
            oldInput.remove();
            newInput.attr("class", "form-control");
            newInput.attr("id", "state");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "state");
            break;        
        case "newFilter4":
            oldInput.remove();
            newInput.attr("class", "form-control");
            newInput.attr("id", "country");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "country");
            break;
        case "newFilter5":
            oldInput.remove();
            newInput.attr("class", "form-control");
            newInput.attr("id", "shape");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "shape");
            break;
        default:
            oldInput.remove();
            newInput.attr("class", "form-control");
            newInput.attr("id", "datetime");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "1/11/2011");
            break;            
    }
    var newId = newInput.attr("id");
    var button=d3.select("#filter-btn");
    var form = d3.select("form");
    button.on("click", runSearch);
    form.on("submit", runSearch);
    function runSearch() {
        //prevent predefined html events
        d3.event.preventDefault();
        // define filter inputs
        if (newInput.attr("id") === "datetime"){
          var inputElement=d3.select("#datetime");
        }else if (newInput.attr("id") === "city"){
          var inputElement=d3.select("#city");
        }else if (newInput.attr("id") === "state"){
          var inputElement=d3.select("#state");
        }else if (newInput.attr("id") === "country"){
          var inputElement=d3.select("#country");
        }else if (newInput.attr("id") === "shape"){
          var inputElement=d3.select("#shape");
        }
        var inputValue = inputElement.property("value");
        var filterTable = tableData.filter(datapoint => datapoint[newId] === inputValue);
        // log filtered results to make it visible in console
        console.log(filterTable);
        // remove previous original data in table
        ufoBody.selectAll("tr").remove();
        // iterate through filtered data and update table
        filterTable.forEach(function(ufo) {
            d3.event.preventDefault();
          // create rows for each data point
          var rowNew = ufoBody.append("tr");
          // iterate through each object inside of array and pick values only
          Object.entries(ufo).forEach(function([key, value]) {
            // create cells for each data point and add values to it 
            var cellNew = rowNew.append("td");
            cellNew.text(value);
          });
        });
    }; 
}





