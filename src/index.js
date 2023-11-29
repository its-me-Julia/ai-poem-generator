let submitInput = document.querySelector("#form-input");
let form = document.querySelector("#form");
let poem = document.querySelector("#poem");
let poemDiv = document.querySelector("#poem-div");

function getInfo(event) {
  event.preventDefault();
  let generatorDiv = document.querySelector("#generator-div");
  generatorDiv.classList.remove("hidden");
  let prompt = `Please write a poem about ${submitInput.value}`;
  let context = `You are a poem writing AI Assistant and you write short 4-lines poems based on information given by user. 
  User information is: ${submitInput.value}. You break each line of poem with HTML tag br for the new, separate line. You also sign
  your poems with 'AI Poem Generator'. Your signature is always on the bottom of the poem on a new line. You always make your signature bold`;
  let apiKey = `b2dt6f634c03ca0b6c80o88e820fa880`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  function showPoem(response) {
    generatorDiv.classList.add("hidden");
    poem.classList.add("poem");
    poemDiv.classList.add("poem-div");
    poem.innerHTML = response.data.answer;
  }

  axios.get(apiUrl).then(showPoem);
}

form.addEventListener("submit", getInfo);
