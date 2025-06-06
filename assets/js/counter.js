

function animateCounter(id, target) {
  const el = document.getElementById(id);
  let count = 0;
  const speed = 20;
  const update = () => {
    if (count < target) {
      count++;
      el.innerText = count + '+ Hours';
      setTimeout(update, speed);
    }
  };
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      update();
      observer.disconnect();
    }
  });
  observer.observe(el);
}

document.addEventListener("DOMContentLoaded", () => {
  animateCounter("manual-hours", 200);
  animateCounter("auto-hours", 200);
});
