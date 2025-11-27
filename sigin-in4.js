document.getElementById("signinForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
  
    // Simulate saving user to localStorage (temporary demo)
    const userData = { username, email, password };
  localStorage.setItem("user", JSON.stringify(userData));
    
    alert("Account created successfully!");
    window.location.href = "login5.html";
  });
  