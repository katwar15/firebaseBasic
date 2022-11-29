import { auth } from "../../firebaseConfig.js";
// import z samego firebase:
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// W funkcji poniżej:
// 1. Wybranie i czyszczenie sekcji content (klasa 'content', querySelector, innerHTML = '')
// 2. Stwórz element <form> i nadaj mu id 'register-form'
// 3. Stwórz element <h2> i nadaj mu textContent 'Register'
// 4. Stwórz element <input>, nadaj mu type 'email', placeholder 'email', id 'input-email-register'
// 5. Stwórz element <input>, nadaj mu type 'password', placeholder 'password', id 'first-input-password-register'
// 6. Stwórz element <input>, nadaj mu type 'password', placeholder 'repeat password', id 'second-input-password-register'
// 7. Stwórz element <button>, nadaj mu type 'submit' i textContent 'Register'
// 8. Podepnij wszystkie elementy do elementu form (pkt 2) w tej kolejności:
// - h2
// - input email
// - input pass 1
// - input pass 2
// - submit button

// 9. Element form podepnij do sekcji content
// 10. Na formularz (pkt 2) nałóż event listener (będziemy reagować na submit, pamiętaj o event.preventDefault())
// 11. W event listenerze:
// - zbieracie zawartość wszystkich inputów do osobnych zmiennych (.value !!!)
// 12. Sprawdź console.logiem czy zbieranie wartości działa
// 13. Zaimportuj funkcję do index.js i podepnij ją pod loginButton

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  //
  const form = document.createElement("form");
  form.setAttribute("id", "register-form");
  //
  const h2 = document.createElement("h2");
  h2.textContent = "Register Form";
  //
  const firstInput = document.createElement("input");
  firstInput.setAttribute("type", "email");
  firstInput.setAttribute("placeholder", "email");
  firstInput.setAttribute("id", "input-email-register");
  //
  const firstPassword = document.createElement("input");
  firstPassword.setAttribute("type", "password");
  firstPassword.setAttribute("placeholder", "password");
  firstPassword.setAttribute("id", "first-input-password-register");
  //
  const secondPassword = document.createElement("input");
  secondPassword.setAttribute("type", "password");
  secondPassword.setAttribute("placeholder", "repeat password");
  secondPassword.setAttribute("id", "second-input-password-register");
  //
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "submit-button-register");
  button.textContent = "Register";
  //
  form.appendChild(h2);
  form.appendChild(firstInput);
  form.appendChild(firstPassword);
  form.appendChild(secondPassword);
  form.appendChild(button);
  contentContainer.appendChild(form);
  //
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstInputValue = firstInput.value;
    const firstPasswordValue = firstPassword.value;
    const secondPasswordValue = secondPassword.value;
    console.log(firstInputValue, firstPasswordValue, secondPasswordValue);

    if (firstPasswordValue === secondPasswordValue) {
      // właściwa rejestracja użytkownika, CZYLI DAJESZ ODWOŁANIE GDZIE TO MA WRZUCIĆ!!!!
      createUserWithEmailAndPassword(auth, firstInputValue, firstPasswordValue)
        // mamy promisa, którego będziemy obsługiwać za pomocą then'a

        .then((userCredentials) => console.log(userCredentials))
        .catch((err) => console.log(err));
    } else {
      console.log("hasla sie nie zgadzaja");
    }
  });
}
