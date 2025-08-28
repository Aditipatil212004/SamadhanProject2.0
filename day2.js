let marks = [45, 67, 89, 22, 200, 76, 88];
let highest = marks[0]; 

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i]; 
  }
}

console.log("Highest marks = " + highest);
