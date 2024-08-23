let flag = document.querySelector(".flag");

let n = flag.clientWidth;

for (let i = 0; i < n; i++) {
  let item = document.createElement("div");
  item.className = "flag-item";
  item.style.backgroundPosition = -i + "px 0";
  item.style.animationDelay = i * 10 + "ms";
  flag.appendChild(item);
}