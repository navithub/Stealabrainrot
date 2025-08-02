function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("❌ Please enter both Roblox username and password.");
    return;
  }

  localStorage.setItem("brainrotUser", username);
  document.getElementById("displayUser").textContent = username;
  document.querySelector(".login-box").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  alert("✅ Welcome to Steal a Brainrot, " + username + "!");
}

function showMenu(menu) {
  document.querySelectorAll("#dashboard > div").forEach(div => {
    if (div.id.startsWith("menu-")) div.classList.add("hidden");
  });
  document.getElementById("menu-" + menu).classList.remove("hidden");
}

// Simulate loading
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 2500);
};
