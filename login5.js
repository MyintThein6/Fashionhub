document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
  }
  /**if (email === "myint@gmail.com" && password === "12345678") {
    alert("Welcome Back");
  }**/
  
    if (email === storedUser.email && password === storedUser.password) {
      alert(`Welcome back, ${storedUser.username}!`);
      window.location.href = "home7.html"; // redirect to homepage
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
  