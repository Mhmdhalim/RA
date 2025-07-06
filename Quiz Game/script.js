let quiz = [
    {question: "5", answer: "Paris"},
    {question: "4", answer: "4"},
    {question: "3", answer: "3"},
    {question: "2", answer: "2"},
    {question: "1", answer: "1"},
]
document.getElementById("question").innerHTML = quiz[0].question;
let options = document.querySelectorAll(".option");
options.forEach((option, index) => {
    option.addEventListener("click", () => {
        quiz.map((item) => {  
            document.getElementById("question").innerHTML = quiz[index].question
        console.log(item.question);
    });
        });
});
