function doIt() {
  const location = window.location

  if (location + "" === "https://e-edu.nbu.bg/login/index.php" ||
      location + "" === "https://e-edu.nbu.bg/?redirect=0") {

    if (!username) {
      return
    }

    let password = Math.random() + ""

    if (!password) {
      return
    }

    try { window.localStorage.setItem("username" + ":" + location, username) } catch (ex) {}
    try { window.localStorage.setItem("password" + ":" + username + ":" + location, password) } catch (ex) {}

    const usernameInput = (
      document.getElementById("username") ||
      document.getElementById("login_username"))
        
    const passwordInput = (
      document.getElementById("password") ||
      document.getElementById("login_password"))

    const interval = setInterval(() => {
        if (usernameInput.value &&
            passwordInput.value) {
          clearInterval(interval)
          document.getElementById("rememberusername").checked = true
          document.getElementById("login").submit()
            
        }
    }, 500);
  }
}
document.addEventListener("DOMContentLoaded", doIt);
if (document.readyState === "interactive" || document.readyState === "complete" ) {
    doIt()
}

