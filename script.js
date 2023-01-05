const btn = document.querySelector("button");
const textArea = document.querySelector("textarea");

btn.addEventListener("click", () => {
  textArea.select();
  const copyText = textArea.value;
  navigator.clipboard.writeText(copyText);
  btn.innerText = "کپی شد!";
  btn.style.backgroundColor = '#636e72'
  btn.style.color = '#fff'
  setTimeout(() => {
    btn.innerText = 'کپی کن'
    btn.style.backgroundColor = '#2d3436'
    btn.style.color = '#fff'

  }, 1500);
});
