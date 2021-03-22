var dateEl = document.getElementById("currentDay");
var currentDate = moment();
var currentHour = moment().hours();
var timeNineEl = document.querySelector("#timeNine")
var timeTenEl = document.querySelector("#timeTen")
var timeElevenEl = document.querySelector("#timeEleven")
var timeTwelveEl = document.querySelector("#timeTwelve")
var timeOneEl = document.querySelector("#timeOne")
var timeTwoEl = document.querySelector("#timeTwo")
var timeThreeEl = document.querySelector("#timeThree")
var timeFourEl = document.querySelector("#timeFour")
var timeFiveEl = document.querySelector("#timeFive")



dateEl.innerHTML= currentDate
console.log(currentHour)

if (currentHour > 9) {
    $(timeNineEl).addClass("past")
}
if (currentHour === 9) {
    $(timeNineEl).addClass("present")
}










$(timeNineEl).on("click", function()  {
    console.log("form was clicked")
    console.log(this);

    var text = $(this)
    .text()
    .trim();


    var taskText = $("<textArea>").text(text).addClass("time-block col-10 editing");
    $(this).replaceWith(taskText)
    taskText.trigger("focus");

})

$(saveBtnNine).on("click", function() {
    console.log("save was clicked")

    var text = $(timeNineEl)
    .text()
    .trim();

    var taskDiv = $("<div>").text(text);
    $(timeNineEl).replaceWith(taskDiv)
    
    console.log(timeNineEl)
})






if (currentHour > 10) {
    $(timeTenEl).addClass("past")
}
if (currentHour === 10) {
    $(timeTenEl).addClass("present")
}

if (currentHour < 10) {
    $(timeTenEl).addClass("future")
}

if (currentHour > 11) {
    $(timeElevenEl).addClass("past")
}
if (currentHour === 11) {
    $(timeElevenEl).addClass("present")
}

if (currentHour < 11) {
    $(timeElevenEl).addClass("future")
}

if (currentHour > 12) {
    $(timeTwelveEl).addClass("past")
}
if (currentHour === 12) {
    $(timeTwelveEl).addClass("present")
}

if (currentHour < 12) {
    $(timeTwelveEl).addClass("future")
}

if (currentHour > 13) {
    $(timeOneEl).addClass("past")
}
if (currentHour === 13) {
    $(timeOneEl).addClass("present")
}

if (currentHour < 13) {
    $(timeOneEl).addClass("future")
}

if (currentHour > 14) {
    $(timeTwoEl).addClass("past")
}
if (currentHour === 14) {
    $(timeTwoEl).addClass("present")
}

if (currentHour < 14) {
    $(timeTwoEl).addClass("future")
}

if (currentHour > 15) {
    $(timeThreeEl).addClass("past")
}
if (currentHour === 15) {
    $(timeThreeEl).addClass("present")
}

if (currentHour < 15) {
    $(timeThreeEl).addClass("future")
}

if (currentHour > 16) {
    $(timeFourEl).addClass("past")
}
if (currentHour === 16) {
    $(timeFourEl).addClass("present")
}

if (currentHour < 16) {
    $(timeFourEl).addClass("future")
}

if (currentHour > 17) {
    $(timeFiveEl).addClass("past")
}
if (currentHour === 17) {
    $(timeFiveEl).addClass("present")
}

if (currentHour < 17) {
    $(timeFiveEl).addClass("future")
}
