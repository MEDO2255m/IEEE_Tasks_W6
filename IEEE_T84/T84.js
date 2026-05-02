let Font = document.querySelector("#Font");
let Color = document.querySelector("#Color");
let Size = document.querySelector("#Size");
let text = document.querySelector(".text");

if (window.localStorage.getItem("Font")) {
  document.body.style.fontFamily = window.localStorage.getItem("Font");
  Font.value = window.localStorage.getItem("Font");
  text.style.fontFamily = Font.value;
}
if (window.localStorage.getItem("Color")) {
  document.body.style.backgroundColor = window.localStorage.getItem("Color");
  Color.value = window.localStorage.getItem("Color");
}
if (window.localStorage.getItem("Size")) {
  document.body.style.fontSize = window.localStorage.getItem("Size") + "px";
  Size.value = window.localStorage.getItem("Size");

  text.style.fontSize = Size.value + "px";
}

Font.addEventListener("change", function () {
  document.body.style.fontFamily = Font.value;
  window.localStorage.setItem("Font", Font.value);
});

Color.addEventListener("change", function () {
  document.body.style.backgroundColor = Color.value;
  window.localStorage.setItem("Color", Color.value);
});
Size.addEventListener("change", function () {
  document.body.style.fontSize = Size.value + "px";
  text.style.fontSize = Size.value + "px";
  window.localStorage.setItem("Size", Size.value);
});
