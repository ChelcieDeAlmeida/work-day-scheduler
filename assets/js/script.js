// Display Current Datetime
currentDate();

function currentDate() {
    var currentDatetime = $("#currentDay").text(moment().format('dddd, MMMM Do h:mm:ss A'));
    setTimeout(currentDate, 1000);
}

// Enter text into time block // 
// NOTE: First time block shifts to the left //

$("#enterText").on("click", function() {
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

// ENTER CODE HERE //