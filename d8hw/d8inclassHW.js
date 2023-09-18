// //use java to select element with and id of 'mydiv' and change bckground color to lightblue
// let elem = document.getElementById('myDiv');
// elem.style.background = 'lightblue';
// //select all p elements and log their inner text
// let paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(function(paragraph) {
//   console.log(paragraph.innerText);
// });


//ex 2

//creating button
 //* SELECTORS *

//const btn = document.querySelector('.btn_onclick');
//* EVENTS * \\
//what when the button is clicked -> change the background color





// * FUNCTIONS *\\
//OUTPUT: Change Background Color

function changeBackground() {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);

	document.body.style.backgroundColor = `#${randomColor}`;
}

//*APPLICATION START *\\
//changeBGColor('black');

////////pricing CACULATOr


