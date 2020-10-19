let root = document.querySelector(".root");

let control = document.createElement('div');
control.classList.add("control", "flex");
let nextBtn = document.createElement('button');
nextBtn.innerText = "Next";
let backBtn = document.createElement('button');
backBtn.innerText = "Back";
control.append(nextBtn, backBtn);
let container = document.createElement('div');


class Quiz {
    constructor(question) {
        this.allQuestions = question;
        this.activeIndex = 0;
        this.score = 0
    }

    getNextQuestion() {
        this.activeIndex = this.activeIndex + 1;
    }

    getPrevQuestion() {
        this.activeIndex = this.activeIndex - 1;
    }

    getCurrentQuestion() {
        return this.allQuestions[this.activeIndex];
    }

    renderStart(){
        container.classList.add('hide');
        let startBtn = document.createElement('button');
        startBtn.classList.add("start");
        startBtn.innerText = "Start Quiz";
        root.append(startBtn);

        startBtn.addEventListener('click', (event) => {
            startBtn.classList.add('hide');
            container.classList.remove('hide');
        });
    }

    render() { 
        if(this.getCurrentQuestion()) {
            return this.getCurrentQuestion().renderQuestions(root);
        } else {
            // alert("no questions left");
            showScore();
        }     
    }
}


class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isCorrectAnswer(answer) {
        return this.options[this.correctAnswerIndex] === answer;
    }

    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }

    renderQuestions(root) {

        container.innerText = "";
        let questions = document.createElement('div');
        questions.classList.add("questions");
        questions.innerText = this.title;

        let btnGrid = document.createElement('div');
        btnGrid.classList.add("btn-grid");

        this.options.forEach((option) => {
            let optionBtn = document.createElement('button');
            optionBtn.innerText = `${option}`;
            optionBtn.classList.add('btn');

            btnGrid.append(optionBtn);
        })
        
        container.append(questions, btnGrid, control);
       

        root.append(container);

        btnGrid.addEventListener('click', (event) => {
            // console.log(event.target, this, btnGrid)
            checkAnswer(event,btnGrid, this);
        });

        
    }
}



let question1 = new Question("How do you call a function named 'myFunction'?", ["myFunction()", "call myFunction()", "call function myFunction", "function()"], 0);

let question2 = new Question("Inside which HTML element do we put the JavaScript?", ["<javascript>", "<scripting>", "<script>", "</scripting>"], 2);

let question3 = new Question("Which of these tags are all <table> tags?", ["<table><head><tfoot>", "<table><tr><td>", "<thead><body><tr>", "<table><tr><tt>"], 1);

let question4 = new Question("How can you make a numbered list?", ["<ol>", "<ul>", "<dl>", "<list>"], 0);

let question5 = new Question("Which property is used to change the background color?", ["<color>", "color", "bgcolor", "background-color"], 3);


let quiz = new Quiz([question1, question2, question3, question4, question5]);
quiz.renderStart();
quiz.render();


function handleNext() {
    quiz.getNextQuestion();
    quiz.render();
}

nextBtn.addEventListener('click', handleNext);

function handleBack() {
    quiz.getPrevQuestion();
    quiz.render();
}

backBtn.addEventListener('click', handleBack);


function checkAnswer(event, btnGrid, obj) {
    if(event.target.innerText === obj.getCorrectAnswer()) {
        event.target.classList.add('correct');
        quiz.score +=1;
    }else {
        event.target.classList.add('wrong');
        btnGrid.children[obj.correctAnswerIndex].classList.add('correct');
        
    }
}

function showScore() {
    container.classList.add('hide');
    let score = document.createElement('p');
    score.classList.add('score');
    score.innerText = `Your Score: ${quiz.score}`;
    root.append(score);
    console.log(quiz.score);
}

