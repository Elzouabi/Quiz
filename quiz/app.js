//function som gör så att ifall quizen är färdig så visar den poäng annars visar det frågorna med valen.
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // Visar Frågorna
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // Visar olika val
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        //Visar framsteg, frågan x av 10

        showProgress();
    }
};
//om man gissar fel
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

//Visar Poäng
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

//Visar Score
function showScores() {
    var gameOverHTML = "<h1>Vad fick du?</h1>";
    gameOverHTML += "<h2 id='score'> Såhär många rätt fick du: " + quiz.score + " av 10.</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// Skapar Frågorna, skapar en variabel som heter questions som innehåller många frågor som heter Question. I själva frågorna så skriver man först frågan, sedan gör man en lista av 4 olika val. sen utanför listan så finns rätt svar som måste stämma med en av valen.
var questions = [
    new Question("Vem är snyggast", ["Frippe", "Nån","Vem som", "En annan Fredrik"], "Frippe"),
    new Question("Vad dricker Frippe till frukost?", ["Kaffe", "Mjölk", "Juice", "Nocco"], "Nocco"),
    new Question("Hur mycket bänkar Frippe?", ["100kg", "50kg","75kg", "25kg"], "100kg"),
    new Question("Vad gör Frippe på fritiden?", ["Äter chips", "Kollar TV", "Springer", "Ingenting"], "Springer"),
    new Question("Vem är räddaren i nöden?", ["Lasse", "Frippe", "Liselott", "Chris"], "Frippe"),
    new Question("Vad kommer Christian få för betyg?",["A", "A", "A", "A"], "A"),
    new Question("Vad är svårast att lösa?", ["Matte", "Fysik", "Kärleksliv", "Webbutveckling"], "Webbutveckling"),
    new Question("Har Christian Lärt sig någonting under Gymnasiet?", ["Lite", "Lagom", "Mycket", "Ingenting"], "Mycket"),
    new Question("Vill Christian gå om Gymnasiet", ["Aldrig","Aldrig","Aldrig","Aldrig"], "Aldrig"),
    new Question("Vilket märke är bäst?", ["Apple", "Samsung", "Huawei", "Sony"], "Samsung")
];

//Skapar Quiz
var quiz = new Quiz(questions);

//Visar Quiz
populate();




