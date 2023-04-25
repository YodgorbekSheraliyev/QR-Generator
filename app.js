const qr = document.querySelector(".qr");
const img = document.querySelector(".qr img");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

let url = "";

btn.addEventListener("click", () => {
  if (!input.value) {
    alert("Please insert the text");
  } else {
    url = `https://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=250x250`;
    getQr();
  }
});

async function getQr() {
  const response = await fetch(url);
  qr.style.display = "block";
  img.src = url;
  input.value = "";
}
