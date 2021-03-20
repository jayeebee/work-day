var dateEl = document.getElementById("currentDay");
var currentDate = moment().format('dddd MMMM do YYYY')
console.log(currentDate)

dateEl.innerHTML= currentDate




//moment(XXX).isValid to be used for color scheme maybe