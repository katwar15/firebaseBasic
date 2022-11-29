// W funkcji:
// 1. Stwórz element <form> i nadaj mu id 'todo-form'
// 2. Stwórz element <input>, type "text", id "todo-input"
// 3. Stwórz element <fieldset>, id "todo-fieldset"
// 4. Stwórz element <legend>, id 'todo-legend', textCotnent 'Select a category'
// 5. Będą 4 kategorie: work, life, sport, education
// - tworzycie diva i nazywacie go w zaleznosci od kategorii (np. divWork, divLife) i id też od kategorii ("div-work", "div-life")
// - do środka diva wrzucacie input (type "radio", id "radio-{kategoria (np. work)}" ("radio-work"), name "category"!!!, value "kategoria (np. work, life)")
// oraz label, for "radio-{kategoria}" (atrybut for labela musi mieć tą samą wartość co id inputu), textContent
// 6. Do elementu <fieldset> przy pomocy appendChild, podpinacie legend i wszystkie 4 divy
// 7. Stwórz element <button>, type 'submit', id "todo-form-submit-button", textContent "Add todo"
// 8. Do <form> podpinacie input (pkt 2), fieldset i submit button
// 9. Cały form returnujecie

/* <div id="div-work">
    <input type="radio" id="radio-work" name="category" value="work"/>
    <label for="radio-work">Work</label>
</div>
<div id="div-life">
    <input type="radio" id="radio-life" name="category" value="life"/>
    <label for="radio-life">Life</label>
</div> */

export default function () {
  // 1.
  const form = document.createElement("form");
  form.setAttribute("id", "todo-form");

  // 2.
  const input = document.createElement("input");
  input.setAttribute("id", "todo-input");

  // 3.
  const fieldset = document.createElement("fieldset");
  fieldset.setAttribute("id", "todo-fieldset");

  // 4.
  const legend = document.createElement("legend");
  legend.setAttribute("id", "todo-legend");
  legend.textContent = "Select a category";
  fieldset.appendChild(legend);
  // 5.
  const categories = ["work", "life", "sport", "education"];
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.setAttribute("id", `div-${category}`);
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("id", `radio-${category}`);
    radioInput.setAttribute("name", "category");
    radioInput.setAttribute("value", category);
    const label = document.createElement("label");
    label.setAttribute("for", `radio-${category}`);
    label.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    div.appendChild(radioInput);
    div.appendChild(label);
    fieldset.appendChild(div);
  });

  // 7.
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "todo-form-submit-button");
  submitButton.textContent = "Add todo";

  // 8.
  form.appendChild(input);
  form.appendChild(fieldset);
  form.appendChild(submitButton);

  // 9.
  return form;
}
/* <div id="div-work">
    <input type="radio" id="radio-work" name="category" value="work"/>
    <label for="radio-work">Work</label>
</div>
<div id="div-life">
    <input type="radio" id="radio-life" name="category" value="life"/>
    <label for="radio-life">Life</label>
</div> */
