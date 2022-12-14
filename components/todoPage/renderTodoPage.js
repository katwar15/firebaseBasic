import renderTodoForm from "../todoForm/renderTodoForm.js";
import { auth, database } from "../../firebaseConfig.js";
import {
  ref,
  onValue,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

const renderH2 = () => {
  const h2 = document.createElement("h2");
  h2.textContent = "Add, remove and edit your todos";
  return h2;
};

const appendElements = (rootEl, elsToAppend) => {
  elsToAppend.forEach((el) => rootEl.appendChild(el));
};

export default function () {
  const contentContainer = document.querySelector(".content");

  const todoRef = ref(database, "todos/" + auth.currentUser.uid);

  const todoFormHandler = (event) => {
    event.preventDefault();
    const todoText = document.getElementById("todo-input").value;
    const category = [...document.getElementsByName("category")].find(
      (input) => input.checked
    ).value;
    push(todoRef, {
      todoText,
      category,
    })
      .then(() => console.log("Pushed the data successfully"))
      .catch(() => console.log("Failed to push the data"));
  };
  onValue(todoRef, (snapshot) => {
    const data = snapshot.val();

    if (!data) {
      contentContainer.innerHTML = "";

      const h2 = renderH2();
      contentContainer.appendChild(h2);

      const todoForm = renderTodoForm();

      contentContainer.appendChild(todoForm);

      todoForm.addEventListener("submit", todoFormHandler);
    } else {
      console.log(data);
      const todos = Object.values(data);

      const h2 = renderH2();

      const listItems = todos.map((el, i) => {
        const li = document.createElement("li");
        li.setAttribute("id", `li-${i}`);

        const div = document.createElement("div");
        div.setAttribute("id", `div-${i}`);

        const span = document.createElement("span");
        span.textContent = `${el.todoText} (${el.category})`;

        const editButton = document.createElement("button");
        editButton.setAttribute("id", `edit-button-${i}`);
        editButton.setAttribute("class", "edit-button");
        editButton.textContent = "Edit";

        const removeButton = document.createElement("button");
        removeButton.setAttribute("id", `remove-button-${i}`);
        removeButton.setAttribute("class", "remove-button");
        removeButton.textContent = "Remove";

        appendElements(div, [span, editButton, removeButton]);

        li.appendChild(div);

        return li;
      });

      console.log(listItems);

      const ul = document.createElement("ul");
      listItems.forEach((el) => ul.appendChild(el));
      contentContainer.innerHTML = "";
      appendElements(contentContainer, [h2, renderTodoForm(), ul]);
      const todoForm = document.getElementById("todo-form");
      todoForm.addEventListener("submit", todoFormHandler);

      // EDIT BUTTON
      // 1. Wybierz wszystkie edit buttony (getElementsByClassName, "edit-button") i zamie?? na
      // zwyk??y array (zapisujecie do zmiennej)
      // 2. Na li??cie edit button??w (pkt 1) wywo??aj metode forEach (parametry: el, i)
      // 3. Na el (parametr forEach) nak??adacie event listener na click (w ??rodku zwyk??a funkcja, nie strza??kowa!!!)
      // W event listenerze:
      // 4. Usu?? z DOMu element kt??ry zosta?? klikni??ty (w ??rodku EL sprawd?? co to this, sprawd?? .remove())
      // 5. Wybierz diva (getElementById, `div-${i}`)
      // 6. Wywo??aj funkcj?? renderTodoForm i zapisz wynik do zmiennej
      // 7. todoForm'owi (pkt 6) nadaj id `todo-form-${i}`
      // 8. Do diva (pkt 5) podepnij todoForm (pkt 6)
      // 9. Na todoForm (pkt 6) nadaj event listener (submit)
      // W EL:
      // 10. ??ci??gnij todoText (this, childNodes)
      // 11. ??ci??gnij kategori?? (getElementsByTagName, mo??na wywo??a?? na this)
      // 12. Stw??rz obiekt updates (const updates = {})
      // 13. Do obiektu updates wrzu?? w??a??no???? "todos/*uid usera*/*id todosa*" (Object.keys(data)): { category, todoText }
      // 14. Wywo??aj funkcj?? update z FB

      const editButtons = [...document.getElementsByClassName("edit-button")];
      editButtons.forEach((el, i) => {
        el.addEventListener("click", function () {
          //
          console.log(this);
          this.remove();
          //
          const div = document.getElementById(`div-${i}`);
          const todoForm = renderTodoForm();
          todoForm.setAttribute("id", `todo-form-${i}`);
          div.appendChild(todoForm);
          todoForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log(this);
            console.log(this.childNodes);
            const todoText = this.childNodes[0].value;
            //ten this wywo??a tylko inputy na tym formularzu
            const category = [...this.getElementsByTagName("input")]
              .slice(1, 5)
              .find((input) => input.checked).value;

            const updates = {};
            // turbo wa??ne!!!!!!!!! dynamiczne wywo??ywanie
            updates[`todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`] = {
              category,
              todoText,
            };
            update(ref(database), updates);
          });
        });
      });

      // 1. Wybranie remove button??w (analogicznie do edit buttonow)
      // 2. Na li??cie z pkt 1 wywo??aj metode forEach (el, i)
      // W forEach:
      // 3. Na el (parametr forEach'a) nak??adacie EL na click
      // W ??rodku EL:
      // 4. Usuwacie ca??e <li> do kt??rego nale??a?? klikni??ty remove button (this, parentElement * 2, .remove())
      // 5. Wywo??anie metody remove (z firebase), usu?? ni?? klikni??tego todosa

      const removeButtons = [
        ...document.getElementsByClassName("remove-button"),
      ];

      removeButtons.forEach((el, i) => {
        el.addEventListener("click", function () {
          this.parentElement.parentElement.remove();
          remove(
            ref(database),
            `todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`
          );
        });
      });
    }
  });
}

// dynamiczne wywo??ywanie

// const lista = [1, 2, 3, 4, 5, 6];
// const obiekt = {};

// lista.forEach((nazwaPolaCzyliElementZListy, i) => {
//   lista[i] = "jaka?? liczba";
// });

// zadanie domowe:
// bracket notation
