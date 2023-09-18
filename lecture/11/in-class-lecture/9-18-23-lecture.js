//creating button
// * SELECTORS *\\
const btns = document.querySelectorAll('.btn');

//* EVENTS * \\
//what when the button is clicked -> change the background color
btns.forEach((button) =>
button.addEventListener('click', (e) => {
  const color = e.target.getAttribute('data-color');
////e is shorthand for event
  changeBGColor(color);

}),
);

// * FUNCTIONS *\\
//OUTPUT: Change Background Color
function changeBGColor(color) {
  document.body.style.backgroundColor= color;
}

//*APPLICATION START *\\
changeBGColor('black');

////////pricing CACULATOr
