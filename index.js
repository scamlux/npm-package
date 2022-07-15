function renderHexes(wrapper, count) {
  function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function renderBtn() {
    let btn = document.createElement("button");
    btn.innerText = randomColor();
    btn.style.backgroundColor = btn.innerText;
    btn.style.padding = "1rem 2rem";
    btn.style.fontSize = "1.5rem";
    btn.style.color = "#fff";
    wrapper.appendChild(btn);
  }

  for (let i = 0; i < count; i++) {
    renderBtn();
  }
  const btns = document.querySelectorAll("button");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      document.body.style.backgroundColor = btns[i].innerText;
      console.log(btns[i].innerText);
    });
  }
}

module.exports = renderHexes;
