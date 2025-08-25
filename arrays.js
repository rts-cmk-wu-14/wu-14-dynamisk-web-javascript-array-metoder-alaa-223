document.addEventListener("DOMContentLoaded", function () {
  let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
  let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
  let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
  let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

  // --- Løs opgaverne herunder --- 
  //opgave 1: Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle de tal som er større end 20.
  const opgave1 = numbersArray.filter((num) => num > 20);
  console.log(opgave1)

  // Opgave 2
  // Tilføj katten "Sniffles" til catsArray.
  // Udskriv arrayet i konsollen.
  // console.log("Opgave 2", ...)

  let opgave2 = catsArray.push("Sniffles");
  console.log(catsArray)


  // Opgave 3a
  // Check om der i dogsArray er en hund som hedder "Trixie".
  // Udskriv "true" eller "false" i konsollen afhængig af svaret.
  // console.log("Opgave 3a", ...)
  let Trixie = dogsArray.includes("Trixie");
  console.log("Opgave 3a", Trixie);


  // Opgave 3b
  // Check om der i dogsArray er en hund som hedder "Baxter".
  // Udskriv "true" eller "false" i konsollen afhængig af svaret.
  // console.log("Opgave 3b", ...)
  let Baxter = dogsArray.includes("Baxter");
  console.log("Opgave 3b", Baxter);


  //     Opgave 4a
  // Check om der i catsArray er en kat som hedder "Bagheera".
  // Udskriv katten i konsollen hvis den findes og ellers "undefined".
  // console.log("Opgave 4a", ...)
  let cat = catsArray.find(name => name === "Bagheera");
  console.log(cat);
  // Opgave 4b
  // Check om der i catsArray er en kat som hedder "Salem".
  // Udskriv katten i konsollen hvis den findes og ellers "undefined".
  // console.log("Opgave 4b", ...)
  let cat2 = catsArray.find((name) => name === "Salem");
  console.log(cat2);

  //     Opgave 5
  // Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
  // Udskriv det nye array i konsollen:
  // console.log("Opgave 5", ...)

  let numbersTimesThree = numbersArray.map((number) => number * 3);
  console.log("Opgave 5", numbersTimesThree);

  //     Opgave 6
  // Udskriv alle hundene i dogsArray i én lang streng.
  // (Sådan her: BarneyMollyBaxter...)
  // Udskriv strengen konsollen:
  // console.log("Opgave 6", ...)
  let allDogs = dogsArray.join(",")
  console.log(allDogs)

  //     Opgave 7a
  // Find ud af hvilket index "Mango" har i fruitsArray.
  // Udskriv indexet i konsollen.


  // Opgave 7b
  // Find ud af hvilket index "Blåbær" har i fruitsArray.
  // Udskriv indexet i konsollen.


  // Opgave 8
  // Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling.
  // Den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen.
  // Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
  //  ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];


}) // ends DOMContentLoaded

