// ג: משחק ניחושים V1
let playAgain = true;

while (playAgain) {
  const secret = Math.floor(Math.random() * 20) + 1;
  let attempts = 0;
  let guessedCorrectly = false;
  let cancelled = false;

  while (!guessedCorrectly) {
    const input = prompt("נחשי מספר בין 1 ל-20 (או לחצי ביטול ליציאה):");

    if (input === null) {
      cancelled = true;
      break;
    }

    const guess = Number(input);

    if (Number.isNaN(guess) || input.trim() === "") {
      alert("נא להזין מספר תקין.");
      continue;
    }

    attempts++;

    if (guess === secret) {
      guessedCorrectly = true;
    } else if (guess > secret) {
      alert("גבוה מדי");
    } else {
      alert("נמוך מדי");
    }
  }

  if (guessedCorrectly) {
    let rating = "";
    if (attempts <= 3) {
      rating = "מדהים!";
    } else if (attempts <= 6) {
      rating = "יפה מאוד";
    } else {
      rating = "אפשר לשפר";
    }

    const finalMessage = `${rating} ניחשת אחרי ${attempts} ניסיונות`;
    alert(finalMessage);
    console.log(finalMessage);
  } else if (cancelled) {
    console.log("המשחק הופסק על ידי המשתמשת.");
  }

  playAgain = confirm("לשחק שוב?");
}
