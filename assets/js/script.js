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

// ENTER CODE HERE //




// Color coding for time block based on whether the block is in the past //
// present, or future // 

// NOTE: Logic only works during a 9-5 after which it d

let currentHour = parseInt(moment().format('H')); 
const rows = document.getElementsByClassName("row");

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
    console.log(rowHour);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      $(".description").addClass("present")
    } 
    if (currentHour > rowHour) {
      $(".description").addClass("past")
    } 
    if (currentHour < rowHour) {
      $(".description").addClass("future")
    } 

  }
});






// var timeColor = function() {
//   var actualTime = $("<textarea>").text(moment().format('hA'));
//   if (actualTime === timeBlocks) {
//     $("<textarea>").addClass("present")
//   }
// }




// ENTER CODE HERE //