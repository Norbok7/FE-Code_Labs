//             global variable    //

// let game = 'Sonic'; // global variable

// console.log(game);

// function title() {
//   console.log(`${game}`);

// }
// title();
// if (true) {
//   console.log(`${game}`);
// }


//        local variable       //

function a() {
  let game = 'Sonic'; // local variable
  console.log(game);
}

a();

if(true) {
  let game = 'Mario';
  console.log(game);
}
// local scope provides security/ less errors or accidental changes
