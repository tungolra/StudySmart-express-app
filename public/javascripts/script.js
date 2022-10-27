getData();
async function getData() {
  try {
    const endpoint = "/api/flashcards";
    // let flashcards = await fetch(endpoint).then((res) => res.json());
    let flashcards = await fetch(endpoint).then((res) =>
      console.log(res.text())
    );
    // console.log(flashcards);
  } catch (err) {
    console.log("hi", err);
  }
}
//function to create array for cards that are due

//function that changes the status and due date of card depending on click
