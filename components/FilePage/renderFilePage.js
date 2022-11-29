import { storage, auth } from "../../firebaseConfig.js";
import {
  uploadBytes,
  ref,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

// 1. Importy: obiekt storage z firebaseConfig; uploadBytes i ref z "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js"
// W funkcji:
// 2. Wybranie i czyszczenie content container
// 3. Stwórz element <h2>, textContent "Store your files via our app!", podepnij od razu do content container
// 4. Stwórz element <form>, id "file-form"
// 5. Stwórz element <input>, id 'file-input', !!! type "file" !!!, accept "image/png, image/jpg, image/jpeg"
// 6. Stwórz element <button>, id "file-form-submit-button", type "submit", textContent "Upload"
// 7. Podepnij file input i submit button do forma (pkt 4)
// 8. Sam form podepnij do content containera

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Store your files via our app!";

  contentContainer.appendChild(h2);

  const fileForm = document.createElement("form");
  fileForm.setAttribute("id", "file-form");

  const fileInput = document.createElement("input");
  fileInput.setAttribute("id", "file-input");
  fileInput.setAttribute("type", "file");
  fileInput.setAttribute("accept", "image/png, image/jpg, image/jpeg");

  const fileButton = document.createElement("button");
  fileButton.setAttribute("id", "file-form-submit-button");
  fileButton.setAttribute("type", "submit");
  fileButton.textContent = "Upload";

  fileForm.appendChild(fileInput);
  fileForm.appendChild(fileButton);

  contentContainer.appendChild(fileForm);

  fileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // wygląda jak wybieranie po indeksie, ale idzie po kluczu
    const file = fileInput.files[0];

    const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`);

    uploadBytes(storageRef, file)
      .then(() => console.log("Uploaded the file succesfully"))
      .catch(() => console.log("Failed to upload the file"));
  });
}
