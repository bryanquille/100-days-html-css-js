const body = document.querySelector("body");

document.addEventListener("mousemove", (e) => {
  const xPos = e.clientX;
  const yPos = e.clientY;
  const starSpan = document.createElement("span");
  starSpan.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f9a828" class="star"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    `;
  starSpan.classList.add("star-span");
  starSpan.style = `top:${yPos}px; left:${xPos}px`;
  body.appendChild(starSpan);
  setTimeout(() => {
    starSpan.remove();
  }, 2000);
});
