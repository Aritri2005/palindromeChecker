document.getElementById("button").addEventListener("click", function() {
  const input = document.getElementById("input").value.trim();
  const result = document.getElementById("result");

  if (input.length === 0) {
    result.textContent = "Enter a valid Input";
    result.style.color = "#FFA500"; 
    return;
  }

  const norm = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const rev = norm.split("").reverse().join("");

  if (norm === rev) {
    result.textContent = `Yes, "${input}" is a palindrome.`;
    result.style.color = "#800080"; 
  } else {
    result.textContent = `No, "${input}" is not a palindrome.`;
    result.style.color = "#00FFFF"; 
  }
});
