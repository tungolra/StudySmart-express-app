

// let users, decks, flashcards;
getData()
async function getData() {
  try {
    const endpoint = "/api/flashcards"
    let flashcards = await fetch(endpoint).then(res => res.json())
    console.log(flashcards);
  } catch (err) {
    console.log(err);
  }
}
