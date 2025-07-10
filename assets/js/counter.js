function animateHours(id, target) {
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

 function animateFlights(id, target) {
   const el = document.getElementById(id);
   let count = 0;
   const speed = 20;
   const update = () => {
     if (count < target) {
       count++;
       el.innerText = count + '+ Flights';
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
    animateFlights("manual-count", 1111);
    animateHours("manual-hours", 273);
    animateFlights("auto-count", 1479);
    animateHours("auto-hours", 496);
 });
