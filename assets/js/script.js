// Display Current Datetime on Jumbotron
workdayTime();

function workdayTime() {
  var workdayDatetime = $("#currentDay").text(moment().format('dddd, MMMM Do h:mm:ss A'));
  setTimeout(workdayTime, 1000);
}

// Clicking the save button to store the text in the time blocks in localStorage //
// and once the page is refreshed, the text will still be present //

$(".saveBtn").on("click", function () {
  var textData = $(this).siblings("textarea").val()
  var timeClock = $(this).parent().attr('id')
  console.log('textData', textData, timeClock);
  localStorage.setItem(timeClock, textData);
});

let currentHour = moment().hours();
console.log(currentHour)
for (let i = 9; i <= 17; i++) {
  $('#' + i).children('textarea').val(localStorage.getItem(i))
  if (i < currentHour) {
    $("#" + i).children('textarea').addClass("past")
  } else if (currentHour === i) {
    $("#" + i).children('textarea').addClass("present")
  }
  else {
    $("#" + i).children('textarea').addClass("future")
  }
}

// Color coding for time block based on whether the block is in the past //
// present, or future /