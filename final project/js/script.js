

  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("d-none");
    } else {
      scrollBtn.classList.add("d-none");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });



let counters = document.querySelectorAll('.counter');
let started = false;

function startCounters() {
  counters.forEach(counter => {
    let target = +counter.dataset.target;
    let count = 0;
    let speed = 2;

    let interval = setInterval(() => {
      count++;
      counter.textContent = count;

      if (count >= target) {
        clearInterval(interval);
      }
    }, speed);
  });
}


window.addEventListener("scroll", () => {
  if (window.scrollY > 500 && !started) {
    startCounters();
    started = true;
  }
});
