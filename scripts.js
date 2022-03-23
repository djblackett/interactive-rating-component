var r = document.querySelector(":root");

// Create a function for getting a variable value
function activateState(e) {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  // alert("The value of --darkBlue is: " + rs.getPropertyValue("--darkBlue"));
  let arr = document.querySelectorAll(".rating-button");
  arr.forEach((item) => {
    item.style.backgroundColor = "";
  });
  console.log(e);
  e.style.setProperty("background-color", "var(--lightGrey)");
  e.style.setProperty("color", "white");
}

function submitRating() {
  let arr = document.querySelectorAll(".rating-button");
  let ratingState = document.querySelector(".rating-state");
  let thankYouState = document.querySelector(".thank-you-state");

  let num;
  arr.forEach((item, index) => {
    if (item.style.backgroundColor === "var(--lightGrey)") {
      num = index + 1;
    }
  });

  if (!num) {
    return;
  }
  ratingState.style.display = "none";
  thankYouState.style.display = "flex";
  let ratingNumber = document.querySelector(".rating-number");
  ratingNumber.innerHTML = `You selected ${num} out of 5`;
}
