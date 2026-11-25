const form = document.querySelector(".sign-in-form");
const switchStatement = document.querySelector(".switch-statement");
const authTitle = document.querySelector(".auth-card h1");
const authSubtitle = document.querySelector(".auth-subtitle");
const USER_STORAGE_KEY = "user";

function getSavedUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) || null;
  } catch {
    return null;
  }
}

function saveUser(username, password) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ username, password }));
}

function renderForm(isSignUp) {
  authTitle.textContent = isSignUp ? "Create Account" : "Welcome Back";
  authSubtitle.textContent = isSignUp ? "Sign up to get started" : "Sign in to continue";
  form.innerHTML = `
    <label class="input-group">
      <input type="text" class="user-name" placeholder="Email or username" autocomplete="username" required>
    </label>
    <label class="input-group">
      <input type="password" class="password" placeholder="Password" autocomplete="new-password" required>
    </label>
    ${isSignUp ? `
      <label class="input-group">
        <input type="password" class="confirm-password" placeholder="Confirm password" autocomplete="new-password" required>
      </label>
    ` : `
    `}
    <button type="submit" class="btnsubmit">${isSignUp ? "Sign Up" : "Sign In"}</button>
    <p class="auth-message" role="status"></p>
  `;
  switchStatement.innerHTML = isSignUp
    ? `Already have an account? <button type="button" class="switch-login-btn">Log in</button>`
    : `Don't have an account? <button type="button" class="switch-login-btn">Sign Up</button>`;
  switchStatement.querySelector(".switch-login-btn").addEventListener("click", () => renderForm(!isSignUp));
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  const username = form.querySelector(".user-name").value.trim();
  const password = form.querySelector(".password").value;
  const message = form.querySelector(".auth-message");

  if (form.querySelector(".confirm-password")) {
    const confirmation = form.querySelector(".confirm-password").value;
    if (password !== confirmation) {
      message.textContent = "Passwords do not match.";
      message.classList.add("error");
      return;
    }
    saveUser(username, password);
    renderForm(false);
    form.querySelector(".auth-message").textContent = "Account created. You can now sign in.";
    return;
  }

  const savedUser = getSavedUser();
  if (savedUser && username === savedUser.username && password === savedUser.password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "mainpage.html";
  } else {
    message.textContent = "Incorrect username or password.";
    message.classList.add("error");
  }
}

form.addEventListener("submit", handleSubmit);
document.querySelector(".switch-login-btn").addEventListener("click", () => renderForm(true));
