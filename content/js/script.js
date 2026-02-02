const submitBtn = document.getElementById("submitBtn");
const nounField = document.getElementById("noun");
const verbField = document.getElementById("verb");
const adjectiveField = document.getElementById("adjective");
const adverbField = document.getElementById("adverb");

const mainWindow = document.getElementById("mainWindow");
const outputWrapper = document.getElementById("outputWrapper");

const storyOutput = document.getElementById("storyOutput");

let noun;
let verb;
let adjective;
let adverb;

let storyPicker;

submitBtn.onclick = function () {
  noun = nounField.value;
  verb = verbField.value;
  adjective = adjectiveField.value;
  adverb = adverbField.value;

  nounField.value = "";
  verbField.value = "";
  adjectiveField.value = "";
  adverbField.value = "";

  mainWindow.style.height = "65%";
  outputWrapper.style.display = "block";

  generateStory();

  console.log(noun);

  console.log(verb);

  console.log(adjective);

  console.log(adverb);
};

function generateStory() {
  storyPicker = Math.floor(Math.random() * 5) + 1;

  if (storyPicker == 1) {
    storyOutput.textContent = `A ${adjective} ${noun} lived near the river and watched others pass by. It believed it knew the best way to survive and refused to listen. When the time came to ${verb}, it chose its own path without help. ${adverb}, the river taught it that wisdom flows from many sources. From that day on, it listened before acting.`;
  } else if (storyPicker == 2) {
    storyOutput.textContent = `In a distant land, a ${noun} was admired for its ${adjective} appearance. Many followed it, hoping to learn its secrets. Yet when trouble came, it did not know how to ${verb}. ${adverb}, the followers realized beauty without skill offers little guidance. True respect, they learned, must be earned through action.`;
  } else if (storyPicker == 3) {
    storyOutput.textContent = `High on a hill lived a ${noun} who felt superior and ${adjective}. It mocked those below and refused to ${verb} with them. One stormy night, it needed help it had once denied. ${adverb}, humility arrived when pride fell away. From then on, it treated others as equals.`;
  } else if (storyPicker == 4) {
    storyOutput.textContent = `A young ${adjective} ${noun} wanted to prove itself quickly. It rushed to ${verb} before understanding the task. Mistakes followed, one after another. ${adverb}, patience revealed what haste had hidden. In time, the ${noun} succeeded by slowing down.`;
  } else if (storyPicker == 5) {
    storyOutput.textContent = `A weary traveler met a ${adjective} ${noun} at a crossroads. Unsure of the way, the traveler asked whether to ${verb}. The ${noun} shared its quiet knowledge instead of boasting. ${adverb}, the traveler reached home safely. Wisdom, the traveler remembered, often speaks softly.`;
  }
}
/*

Story 11
A ${adjective} ${noun} lived near the river and watched others pass by. It believed it knew the best way to survive and refused to listen. When the time came to ${verb}, it chose its own path without help. ${Adverb}, the river taught it that wisdom flows from many sources. From that day on, it listened before acting.

Story 12

Story 13

Story 14

Story 15

*/
