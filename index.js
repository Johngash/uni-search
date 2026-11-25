const form = document.querySelector(".sign-in-form");
const switchBtn = document.querySelector(".switch-login-btn");

function switchToLogin() {
  switchBtn.classList.toggle("signup");

  if (switchBtn.classList.contains("signup")) {
    form.innerHTML = `
      <label>Enter Name:</label>
      <input type="text" name="txtname" placeholder="Enter name"><br>

      <p>Enter your password</p>
      <label>Password:</label>
      <input type="password" name="password" placeholder="* * * * *"><br>

      <p>Confirm password</p>
      <label><b>Confirm Password:</b></label>
      <input type="password" name="confirm-password" placeholder="* * * * *"><br>
    `;
  } else {
    form.innerHTML = `
    <label>Enter Name:</label>
    <input type="text" name="txtname" placeholder="enter name"><br>

    <label>Password:</label>
    <input type="password" name="password" placeholder="* * * * *"><br>

    <input type="submit" name="btnsubmit" value="Login">
  `;
  }
}


