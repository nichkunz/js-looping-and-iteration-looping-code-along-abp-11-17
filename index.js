// // Code your solutions in this file
const employees = ['Lisa', 'Kaitlin', 'Jan'];
function printBadges(employees) {
  for (let i=0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
    }
    return employees;
}


let n=0;
function tailsNeverFails() {
  return Math.random() >= 0.5;
    while (tailsNeverFails() === 'true') {
      n++;
    }
  console.log(`You got ${n} tails in a row!`);
  }



// let n=0;
// function tailsNeverFails() {
//   return Math.random() >= 0.5;
//     while (tailsNeverFails()) {
//       n++;
//       return n;
//     }
//   console.log(`You got ${n} tails in a row!`);
//   }



// console.log(`You got ${n++} tails in a row!`);
//
//
//
// //       i++;
// //     }
// // }
// //   console.log(`You got ${i} tails in a row!`);
