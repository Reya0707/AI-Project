
new Typewriter('#h1', {
  strings: ['Hello', 'World'],
  autoStart: true,
});

function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "36c26f017e4ae34tb6a9679bb25odafe";
let context =
  "be polite and precise";
let prompt = "What's the national language of Belgium?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log(apiUrl);

axios.get(apiUrl).then(showAnswer);

let list = document.querySelector("danger");
list.setAttribute("danger");

let button = document.querySelector("#special-button");
button.style.backgound = "red";

console.log(button);


let buttonOne = document.querySelector("#challenge-1");
buttonOne.setAttribute("disabled", "disabled");


  let buttonTwo = document.querySelector("#challenge-2");
  buttonTwo.style.background = "green";


let buttonThree = document.querySelector("#challenge-3");
buttonThree.style.background = "red";

