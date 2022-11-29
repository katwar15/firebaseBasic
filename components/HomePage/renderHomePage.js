// W funkcji poniżej:
// 1. Wybierz i zapisz do zmiennej sekcje o klasie content (querySelector)
// 2. Wyczyść sekcje content przy pomocy innerHTML
// 3. Stwórz element <h2> i nadaj mu textContent 'Welcome!'
// 4. Stwórz element <p> i nadaj mu textContent "This is a simple
// web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase."
// // 5. Podepnij h2 i p do sekcji content (pkt 1)
// 6. Zaimportuj funkcję do index.js i tam ją wywołaj (przy imporcie nadaj funkcji nazwę renderHomePage)

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  const firstH2 = document.createElement("h2");
  firstH2.textContent = "Welcome!";
  const firstParagraph = document.createElement("p");
  firstParagraph.textContent =
    "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase.";
  contentContainer.appendChild(firstH2);
  contentContainer.appendChild(firstParagraph);
}
