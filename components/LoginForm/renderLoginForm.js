// W funkcji:
// 1. Stwórz element <form> i nadaj mu id 'login-form'
// 2. Stwórz element <input> i nadaj mu type 'email', id 'input-email-login', placeholder 'email'
// 3. Stwórz element <input>, nadaj mu type 'password', id 'input-password-login', placeholder 'password'
// 4. Stwórz element <button>, nadaj mu type 'submit' i textContent 'Sign in'
// 5. Podepnij oba inputy i button do elementu form (pkt 1)
// 6. Zwróc element <form> z funkcji przy pomocy returna.

export default function () {
  const logForm = document.createElement("form");
  logForm.setAttribute("id", "login-form");
  //
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("placeholder", "email");
  emailInput.setAttribute("id", "input-email-login");
  //
  const logPassword = document.createElement("input");
  logPassword.setAttribute("type", "password");
  logPassword.setAttribute("placeholder", "password");
  logPassword.setAttribute("id", "input-password-login");
  //
  const logButton = document.createElement("button");
  logButton.setAttribute("type", "submit");
  logButton.setAttribute("id", "input-button-login");
  logButton.textContent = "Sign In";
  //
  logForm.appendChild(emailInput);
  logForm.appendChild(logPassword);
  logForm.appendChild(logButton);

  return logForm;
}
