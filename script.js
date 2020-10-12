const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question: "Ik bepaal zelf wat belangrijk is om te gaan doen",
    answer: {
      1: "Helemaal niet waar",
      2: "Niet echt waar",
      3: "Neutraal",
      4: "Redelijk waar",
      5: "Helemaal waar"
    },
  },
  {
    question: "Ik zorg dat ik pas binnen de cultuur van de organisatie",
    answer: {
      1: "Helemaal niet waar",
      2: "Niet echt waar",
      3: "Neutraal",
      4: "Redelijk waar",
      5: "Helemaal waar"
    },
  },
  {
    question: "Als de planning in gevaar komt, regel ik een oplossing",
    answer: {
      1: "Helemaal niet waar",
      2: "Niet echt waar",
      3: "Neutraal",
      4: "Redelijk waar",
      5: "Helemaal waar"
    },
  },
  {
    question:
      "Ik kan reageren op het publiek, zonder de opbouw van mijn eigen presentatie te verliezen",
    answer: {
      1: "Helemaal niet waar",
      2: "Niet echt waar",
      3: "Neutraal",
      4: "Redelijk waar",
      5: "Helemaal waar"
    },
  },
  {
    question: "Ik help mijn collega zijn doel te bereiken",
    answer: {
      1: "Helemaal niet waar",
      2: "Niet echt waar",
      3: "Neutraal",
      4: "Redelijk waar",
      5: "Helemaal waar"
    },
  }
];
function buildQuiz() {
  const output = []; // variable to store the HTML output
  myQuestions.forEach((question, i) => {
    // the code we want to run for each question goes here
    const answers = []; // variable to store the list of possible answers
    for (var i = 0; i < myQuestions.length; i++) {
      // and for each available answer...
      for (var j = 0; j < myQuestions[i].length; j++) {
/*         answers = myQuestions[i][j];
 */        answers.push(
          // ...add an HTML radio button
          `<label>
  <input type="radio" name="question${i}" value="${i}">
  ${i} :
  ${question.answers[i]}
</label>`
        );
      }

      output.push(
        `<div class="question"> ${question.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }

  }
  );
  quizContainer.innerHTML = output.join('');  // finally combine my output list into one string of HTML and put it on the page

}

function showResults() {}
buildQuiz();
submitButton.addEventListener("click", showResults);
