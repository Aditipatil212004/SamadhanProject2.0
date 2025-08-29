function calculateMarks(a, b, c, d, e) {
    var total = a + b + c + d + e;
    var avg = total / 5;
    var grade;

    if (avg >= 90) {
        grade = "A+";
    }
    else if (avg >= 75) {
        grade = "A";
    }
    else if (avg >= 60) {
        grade = "B";
    }
    else if (avg >= 40) {
        grade = "C";
    }
    else {
        grade = "Fail";
    }

    console.log("Total Marks = " + total);
    console.log("Average = " + avg);
    console.log("Grade = " + grade);
}


calculateMarks(80, 75, 90, 60, 85);
