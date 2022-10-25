const BASE_URL="mongodb://127.0.0.1:27017/Flashcards"

// let users, decks, flashcards;
getData()
async function getData() {
  try {
    const endpoint = "http://localhost:1100/summary"
    let users = await fetch(endpoint).then(res => res.json())
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}
