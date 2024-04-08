function dayOfTheWeek() {
  switch (
    new Date().getDay() // Číslo 0-6 určuje jaký je den v týdnu
  ) {
    case 0:
      console.log("Je neděle.");
      break;
    case 1:
      console.log("Je pondělí.");
      break;
    case 2:
      console.log("Je úterý.");
      break;
    case 3:
      console.log("Je středa.");
      break;
    case 4:
      console.log("Je čtvrtek.");
      break;
    case 5:
      console.log("Je pátek.");
      break;
    case 6:
      console.log("Je sobota.");
      break;
  }
}
