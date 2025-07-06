const quiz = [
    {
        question: "What is the capital of Austria?",
        options: ["Graz", "Salzburg", "Vienna", "Linz", "Innsbruck"],
        answer: "Vienna"
    },
    {
        question: "What is the result of 2 + 2?",
        options: ["1", "2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "HTML", "Java", "Kotlin"],
        answer: "HTML"
    },
    {
        question: "Who is the founder of Microsoft?",
        options: ["Elon Musk", "Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
        answer: "Bill Gates"
    }
];

let [k, score]  = [0, 0];

// Initialize the monitor
const monitor = document.getElementById("monitor");
monitor.style.width = `0%`;
monitor.style.backgroundColor = "red";

// Function to load a question
function loadQuestion(index) {
    const questionObj = quiz[index];
    document.getElementById("question").innerHTML = questionObj.question;

    const optionsContainer = document.querySelector(".options-container");
    optionsContainer.innerHTML = ""; // Clear previous options

    questionObj.options.forEach(option => {
        let button = document.createElement("button");
        button.className = "option";
        button.innerHTML = option;

        button.addEventListener("click", () => {
            if (option === questionObj.answer) {
                score++;
                button.style.backgroundColor = "green";
            } else {
                button.style.backgroundColor = "red";
                // Highlight the correct answer
                const correctButton = Array.from(optionsContainer.children).find(btn => btn.innerHTML === questionObj.answer);
                if (correctButton) {
                    correctButton.style.backgroundColor = "green";
                }
            }
            k++;
            monitor.style.width = `${(k / quiz.length) * 100}%`;
            setTimeout(() => {
                if (k >= quiz.length) {
                    monitor.innerHTML = "Quiz Over!";
                    monitor.style.width = `100%`;
                    monitor.style.backgroundColor = "white";
                    optionsContainer.innerHTML = "";
                    document.getElementById("question").innerHTML = "Thank you for playing! <br> Your score is " + score + " out of " + quiz.length + ".";
                } else {
                    loadQuestion(k);
                }
            }, 1500); // 1500 milliseconds = 1.5 seconds

        });

        optionsContainer.appendChild(button);
    });
}

// Start the quiz
loadQuestion(k);
