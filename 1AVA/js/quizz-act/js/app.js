const container = document.querySelector("#container-questions");
const containerPoints = document.querySelector("#points-user");
const button = document.querySelector("#btn-send");

let questionsJSON = [];
let pointsUser = 0;

// Init event
document.addEventListener("DOMContentLoaded", () => {
    getQuestions();
    button.addEventListener("click", calculateTotalPoints);
});

// Get questions from JSON
function getQuestions() {
    fetch('data/questions.json')
        .then(result => result.json())
        .then(data => {
            questionsJSON = data;
            populateQuestionsHTML(questionsJSON);
        });
}

/*
* Create HTML cards from array 
* @ param questionsJSON: question list with answers
*/
function populateQuestionsHTML(questionsJSON) {
    questionsJSON.forEach(question => {
        // Generate card question
        container.innerHTML +=
            `<div class="card">
                <h2>${question.text}</h2>
                <img src="img/${question.img}" alt="">
                <div class="container-answers">
                    ${populateAnswersHTML(question.id, question.answers)}
                </div>
            </div>`;
    });
}

/*
* Create HTML inputs from answersList 
*/
function populateAnswersHTML(idQuestion, answersList) {
    // Generate answer HTML of one question in particular
    let anwersHTML = "";
    answersList.forEach(answer => {
        anwersHTML += `
        <p>
            <input type="radio" 
                   name="answer-question-${idQuestion}" 
                   data-id-question="${idQuestion}" 
                   data-id-answer="${answer.id}"
                   value="${answer.response}" />
            <label>${answer.response}</label>
        </p>
        `;
    });
    return anwersHTML;
}

// Calculate the user points from checked radio inputs 
function calculateTotalPoints() {
    // Array with radio inputs that has been selected by the user  
    const aAnswers = document.querySelectorAll("input[type=radio]:checked");
    
    aAnswers.forEach(input => {
        // Get info question from JSON
        let idQuestion = input.dataset.idQuestion;
        let question = questionsJSON.find(q => q.id == idQuestion);

        // Get info selected answer from JSON
        let idAnswer = input.dataset.idAnswer;
        let answer = question.answers.find(a => a.id == idAnswer);

        // Check if the answer selected is right and increase the counter
        if (answer.right) pointsUser += question.points;
        
    });

    containerPoints.innerHTML = `${pointsUser} P.`;
    alert("Total points: "+pointsUser);
}