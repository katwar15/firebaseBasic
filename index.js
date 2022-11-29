import renderHomePage from "./components/HomePage/renderHomePage.js";
import renderLoginPage from "./components/LoginPage/renderLoginPage.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { auth } from "./firebaseConfig.js";
import renderTodoPage from "./components/todoPage/renderTodoPage.js";
import renderTeamPage from "./components/teamPage/renderTeamPage.js";

import renderFilePage from "./components/FilePage/renderFilePage.js";

// JEDYNY PLIK KTÓRY WYKONA SIĘ PRZY ZAŁADOWANIU STRONY

// selecting the content container
const contentContainer = document.querySelector(".content");

// selecting all navbar buttons
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// signInWithEmailAndPassword -> (request do firebase że chce się zalogować) ->
// FIREBASE (sprawdza czy email i haslo sie zgadza) -> response (zalogowano lub nie) -> onAuthStateChanged

// reagowanie na zalogowanie i wylogowanie
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`User is logged in (${user.email}), onAuthStateChanged`);
    loginButton.textContent = "Log out";
  } else {
    console.log(`No user logged in, onAuthStateChanged`);
    loginButton.textContent = "Log in";
    renderHomePage();
  }
});

// rendering the home page on inital page load
renderHomePage();
// rendering the home page on home button click

// home button listener
homeButton.addEventListener("click", renderHomePage);

// login button listener
loginButton.addEventListener("click", () => {
  const user = auth.currentUser;
  if (user) {
    signOut(auth);
  } else {
    renderLoginPage();
  }
});

todosButton.addEventListener("click", renderTodoPage);

publicButton.addEventListener("click", renderTeamPage);

aboutButton.addEventListener("click", renderFilePage);
