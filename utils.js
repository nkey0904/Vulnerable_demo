// utils.js
export function showHTML(userInput) {
  // ❌ XSS - dùng innerHTML trực tiếp
  document.getElementById("output").innerHTML = userInput;
}
