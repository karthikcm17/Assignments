
function gradecalculator() {
    const input = document.getElementById("markinput");
    const marks = Number(input.value);
    const resultDisplay = document.getElementById("gradeResult"); 
    
    if (input.value === "" || marks < 0 || marks > 100) {
        alert("Please enter a valid mark between 0 and 100");
        return;
    }

    let grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    resultDisplay.innerText = "Grade: " + grade;
}