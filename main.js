import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "stdName",
        type: "string",
        message: "Please enter your name:"
    },
    {
        name: "obtMarks",
        type: "number",
        message: "Please enter your obtained marks:"
    },
    {
        name: "maxMarks",
        type: "number",
        message: "Please enter maximum marks:"
    }
]);
let percentage = (answers.obtMarks / answers.maxMarks) * 100;
if (percentage >= 80 && percentage < 100) {
    console.log(`Outstanding! ${answers.stdName}, Your percentage is ${percentage}, and your grade is A1.`);
}
else if (percentage >= 70 && percentage < 80) {
    console.log(`Excellent! ${answers.stdName}, Your percentage is ${percentage}, and your grade is A.`);
}
else if (percentage >= 60 && percentage < 70) {
    console.log(`Very Good! ${answers.stdName}, Your percentage is ${percentage}, and your grade is AB.`);
}
else if (percentage >= 50 && percentage < 60) {
    console.log(`Congratulations! ${answers.stdName}, Your percentage is ${percentage}, and your grade is B.`);
}
else if (percentage >= 40 && percentage < 50) {
    console.log(`Dear! ${answers.stdName}, Your percentage is ${percentage}, and your grade is C.`);
}
else if (percentage >= 33 && percentage < 40) {
    console.log(`Dear! ${answers.stdName}, Your percentage is ${percentage}, and your grade is D.`);
}
else {
    console.log(`Sorry! Your percentage is ${percentage}, and you are fail. `);
}
