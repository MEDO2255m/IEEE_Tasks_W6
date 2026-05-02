let inputs = document.querySelectorAll("input");
let select = document.getElementById("book");

if (sessionStorage.getItem("select")) {
  select.value = sessionStorage.getItem("select");
}

inputs.forEach((input) => {
  if (sessionStorage.getItem(input.id)) {
    input.value = sessionStorage.getItem(input.id);
  }

  input.oninput = function () {
    sessionStorage.setItem(input.id, this.value);
  };
});

select.addEventListener("change", function () {
  sessionStorage.setItem("select", this.value);
});
