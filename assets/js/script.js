// Display Current Datetime on Jumbotron
workdayTime();

function workdayTime() {
    var workdayDatetime = $("#currentDay").text(moment().format('dddd, MMMM Do h:mm:ss A'));
    setTimeout(workdayTime, 1000);
}

// Enter text into time block // 

$("<textarea>").on("click", function(event) {
    event.preventDefault();
    var text = $(this)
    var textInput = $("<textarea>")
    $(this).replaceWith(textInput);
    textInput
    .val(text)
    .text()
    .trim();
  });

// Clicking the save button to store the text in the time blocks in localStorage //
// and once the page is refreshed, the text will still be present //

$(".saveBtn").on("click", function() {
  var textData = $(this).siblings("textarea").val()
  var timeClock = $(this).parent().attr('id')
  console.log('textData',textData,timeClock);
  localStorage.setItem(timeClock,textData);
});


for (let i = 9; i <= 17; i++) {
  $('#'+i).children('textarea').val(localStorage.getItem(i))
}

// Color coding for time block based on whether the block is in the past //
// present, or future // 

// NOTE: Need to make sure this works during regular hours

let currentHour = parseInt(moment().format('H')); 
const rows = document.getElementsByClassName("row");



// Array.from(rows).forEach(row => {
//   let
//     rowIdString = row.id,
//     rowHour;
//   if (rowIdString) {
//     rowHour = parseInt(rowIdString);
//   }
//   if (rowHour) {
//     // Compares row id to current hour and sets color accordingly
//     if (currentHour < rowHour) {
//       $(".description").addClass("past")
//     } 
//     else if (currentHour === rowHour) {
//       $(".description").addClass("present")
//     } 
//     else  {
//       $(".description").addClass("future")
//     } 

//   }
// });