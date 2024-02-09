function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "36c26f017e4ae34tb6a9679bb25odafe";
let context =
  "be polite and provide a short bio";
let prompt = "Who was the first female president in the world?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log(apiUrl);

axios.get(apiUrl).then(showAnswer);