

async function getData(deckID) {
  try {
    const endpoint = "/api/flashcards/";
    // let flashcards = await fetch(endpoint).then((res) => res.json());
    let flashcards = await fetch(endpoint).then((res) =>
      console.log(res.text())
    );
    // console.log(flashcards);
  } catch (err) {
    console.log(err);
  }
}

//after log-in, run a function that assesses statuses of all flashcards 
// based on their due date, matching if it is before or after today;
  // if before, it is due
  // if after, it is pending

//function to create array for cards that are due

//function that changes the status and due date of card depending on click
