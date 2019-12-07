<template>
  <div id="app">
    <Mainmenu v-on:start="startGame" />
    <Score />
    <Quiz class="hide" />
  </div>
</template>

<script>
import Mainmenu from "./components/Mainmenu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

export default {
  name: "app",

  components: {
    Mainmenu,
    Quiz,
    Score
  },
  data() {
    return {
      questions: [
        /*
    {
        type: "singleChoice",
        question: "Wie alt bist du?(12)",
        answers: [
            { text: "9", correct: false },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true }
        ]
    },
    {
        type: "singleChoice",
        question: "Wie alt bist du?(9)",
        answers: [
            { text: "9", correct: true },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        type: "singleChoice",
        question: "Wie alt bist du?(10)",
        answers: [
            { text: "9", correct: false },
            { text: "11", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        type: "singleChoice",
        question: "Wie alt bist du?(11)",
        answers: [
            { text: "9", correct: false },
            { text: "11", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        type: "guess",
        question: "Wie viel Tonnen (1000kg = 1t) Müll verurscht Deutschland pro Jahr?",
        answer: 100

    }, */
        {
          type: "singleChoice",
          question:
            "Durch die Erwärmung der Erde schmilzt Schnee und Eis an den Polkappen (Arktis und Antarktis). Welche Auswirkungen hat dies auf die Weltmeere?",
          answers: [
            {
              text: "gar keine, da der Wasserspiegel immer konstant bleibt",
              correct: false
            },
            {
              text:
                "gar keine, da beide Pole schwimmen, und daher kein neues Wasser verdrängt wird",
              correct: false
            },
            {
              text:
                "ganze Regionen werden überflutet, da der Meeresspiegel einige Zentimeter steigt",
              correct: true
            },
            {
              text:
                "Die Zugspitze, Deutschlands höchster Berg wird überflutet, da der Meeresspiegel steigt.",
              correct: false
            }
          ],
          expl:
            "Eine Studie der USA hat berechnet, dass wenn der gesamte Schnee- und Eisvorrat der Erde abschmilzt, der Meeresspiegel sogar um bis zu 66 m steigen wird. Dann ständen sogar Sädte wie Berlin oder Dortmund unter Wasser."
        },

        {
          type: "ampel",
          question:
            "Für deine Mittagspause hat dir deine Mutter geld mitgegeben, damit du dir einen Saft kaufen kannst. Multivitaminsaft bietet dein Kiosk in 3 Ausführungen an:",
          answers: [
            { text: "Pfandfreie Plastikflasche", correct: "wrong" },
            { text: "Einweg-Plastikflasche", correct: "ok" },
            { text: "Mehrweg-Plastikflasche", correct: "correct" }
          ],
          expl:
            "Die Mehrwegplastikflasche kann bis zu 25 mal wieder sauber gemacht und neu befüllt werden. Die Einweg-Pfandflasche wird immerhin recycelt, aber um 1 neue Plastikflasche herzustellen braucht man viel nues Plastik, da Plastikflaschen nur zu etzwa 25 % Rrecyceltem material bestehen. Eine pfandfreie Plastikflasche landet oft im normalen Hausmüll und wird verbrannt. Übrigens: Auch wenn du Plastikmüll in den Plastikcontainer wirfst, wird er nicht immer recycelt. Weniger als die Hälfte des Plastikmülls wird tatsächlich zu neuem Plastik verarbeitet."
        }
      ],
      MenuContainer: document.getElementById("menu"),
      Container: document.getElementById("container"),
      restartButton: document.getElementById("restart-btn"),
      answerButton: document.getElementById("answer-btn"),
      startButton: document.getElementById("start-btn"),
      nextButton: document.getElementById("next-btn"),
      questionContainerElement: document.getElementById("question-container"),
      questionElement: document.getElementById("question"),
      answerButtonsElement: document.getElementById("answer-buttons"),
      ScoreElement: document.getElementById("score"),
      EingabeElement: document.getElementById("guess-answer"),
      infoButton: document.getElementById("info"),
      shuffledQuestions: [],
      currentIndex: 0,
      score: 0,
      currentGuessAnswer: 0,
      currentExpl: ""
    };
  },
  methods: {
    startGame() {
      this.MenuContainer = document.getElementById("menu");
      this.Container = document.getElementById("container");
      this.restartButton = document.getElementById("restart-btn");
      this.answerButton = document.getElementById("answer-btn");
      this.startButton = document.getElementById("start-btn");
      this.nextButton = document.getElementById("next-btn");
      this.questionContainerElement = document.getElementById(
        "question-container"
      );
      this.questionElement = document.getElementById("question");
      this.answerButtonsElement = document.getElementById("answer-buttons");
      this.ScoreElement = document.getElementById("score");
      this.EingabeElement = document.getElementById("guess-answer");
      this.infoButton = document.getElementById("info");
      this.MenuContainer.classList.add("hide");
      this.Container.classList.remove("hide");
      this.score = 0;
      this.updateScore();
      this.startButton.classList.add("hide");
      this.restartButton.classList.add("hide");
      this.questionContainerElement.classList.remove("hide");
      this.shuffledQuestions = this.questions.sort(() => Math.random() - 0.5);
      this.currentIndex = 0;
      this.setNextQuestion();
    },
    updateScore() {
      this.ScoreElement.innerText = "Score: " + this.score;
    },
    setNextQuestion() {
      this.resetState();
      if (this.currentIndex == 2) {
        this.questionElement.innerText =
          "Du hast alle Fragen beantwortet. Dein Punktestand beträgt: " +
          this.score;

        this.restartButton.classList.remove("hide");
      } else if (this.currentIndex >= this.shuffledQuestions.length) {
        this.questionElement.innerText =
          "Hopla, da sind uns wohl die Fragen ausgegangen.";
      } else {
        this.showQuestion(this.shuffledQuestions[this.currentIndex]);
        this.currentIndex += 1;
      }
    },
    showQuestion(question) {
      this.currentExpl = question.expl;
      if (question.type == "singleChoice") {
        this.questionElement.innerText = question.question;
        question.answers.forEach(answer => {
          const button = document.createElement("button");
          button.innerText = answer.text;
          button.classList.add("btn");
          if (answer.correct) {
            button.dataset.correct = answer.correct;
          }
          button.addEventListener("click", this.selectAnswer);
          this.answerButtonsElement.appendChild(button);
        });
      } else if (question.type == "guess") {
        this.currentGuessAnswer = question.answer;
        this.questionElement.innerText = question.question;
        this.answerButton.classList.remove("hide");
        this.EingabeElement.classList.remove("hide");
      } else if (question.type == "ampel") {
        this.questionElement.innerText = question.question;
        question.answers.forEach(answer => {
          const button = document.createElement("button");
          button.innerText = answer.text;
          button.classList.add("btn");
          button.dataset.correct = answer.correct;
          button.addEventListener("click", this.selectAnswerAmpel);
          this.answerButtonsElement.appendChild(button);
        });
      }
    },
    resetState() {
      this.infoButton.classList.add("hide");
      this.nextButton.classList.add("hide");
      while (this.answerButtonsElement.firstChild) {
        this.answerButtonsElement.removeChild(
          this.answerButtonsElement.firstChild
        );
      }
      this.clearStatusClass(document.body);
    },
    clearStatusClass(element) {
      element.classList.remove("correct");
      element.classList.remove("wrong");
      element.classList.remove("ok");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: serif;
}
:root {
  --hue-neutral: 200;
  --hue-wrong: 0;
  --hue-correct: 145;
  --hue-ok: 55;
}

body {
  --hue: var(--hue-neutral);
  padding: 0;
  margin: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: hsl(var(--hue), 100%, 40%);
}

body.correct {
  --hue: var(--hue-correct);
}

body.wrong {
  --hue: var(--hue-wrong);
}

body.ok {
  --hue: var(--hue-ok);
}

.menu {
  text-align: center;
}

.menu-container {
  width: 200px;
  max-width: 80%;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px 2px;
}

.container {
  width: 800px;
  max-width: 80%;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px 2px;
}

.score-container {
  right: 40px;
  top: 40px;
  position: fixed;
  width: 100px;
  max-width: 80%;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px 2px;
}

.menu-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(1, auto);
  gap: 10px;
  margin: 20px 0;
}

.btn-grid {
  display: grid;
  grid-template-columns: repeat(1, auto);
  gap: 10px;
  margin: 20px 0;
}

.btn {
  --hue: var(--hue-neutral);
  border: 1px solid hsl(var(--hue), 100%, 30%);
  background-color: hsl(var(--hue), 100%, 50%);
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  outline: none;
}

.btn:hover {
  color: black;
  background-color: hsl(var(--hue), 100%, 60%);
}

.btn.correct {
  --hue: var(--hue-correct);
}

.btn.wrong {
  --hue: var(--hue-wrong);
}

.btn.ok {
  --hue: var(--hue-ok);
}

.info-btn {
  float: right;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
}

.start-btn,
.next-btn,
.answer-btn,
.reset-btn {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hide {
  display: none;
}

.switch {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 40px;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  text-align: center;
  content: "M";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
