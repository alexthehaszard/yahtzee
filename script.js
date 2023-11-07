const calculate = () => {
  let upper = [...document.querySelectorAll("input")]
    .filter((e, i) => !e.disabled && e.type != "checkbox" && i < 7)
    .map((e) => parseInt(e.value))
    .reduce((p, c) => {
      return isNaN(c) ? (isNaN(p) ? 0 : p) : (isNaN(p) ? 0 : p) + c;
    });
  let lower = [...document.querySelectorAll("input")]
    .filter((e, i) => !e.disabled && e.type != "checkbox" && i >= 8)
    .map((e) => parseInt(e.value))
    .reduce((p, c) => {
      return isNaN(c) ? (isNaN(p) ? 0 : p) : (isNaN(p) ? 0 : p) + c;
    });
  if (upper >= 63) {
    document.getElementById("b").value = 35;
    upper += 35;
  } else {
    document.getElementById("b").value = 0;
  }

  [...document.querySelectorAll("input[type='checkbox']")]
    .filter((e) => !e.id.includes("yb"))
    .forEach((e) => {
      let value = 0;
      switch (e.id) {
        case "fh":
          value = 25;
          break;
        case "ss":
          value = 30;
          break;
        case "ls":
          value = 40;
          break;
        case "yh":
          value = 50;
          break;
      }
      value = e.checked ? value : 0;
      document.querySelector(`.${e.id}`).value = value;
      lower += value;
    });

  for (let i = 1; i <= 3; i++) {
    if (document.getElementById(`yb${i}`).checked) lower += 100;
  }

  document.getElementById("tu").value = upper;
  document.getElementById("tl").value = lower;
  document.getElementById("gt").value = upper + lower;
};

const elements = [...document.querySelectorAll("input")].filter(
  (e) => !e.id.includes("t")
);
elements.forEach((e) => (e.oninput = calculate));

const zap = (el) => {
  console.log(el.parentElement.classList);
  if (el.parentElement.classList.value == "") {
    el.parentElement.classList.add("zap");
  } else {
    el.parentElement.classList.remove("zap");
  }
  el.style = "pointer-events: initial; z-index: 50;";
};
