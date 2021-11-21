var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
         content.style.maxHeight = null;
      } else {
         content.style.maxHeight = content.scrollHeight + "px";
      }
   });
}
//I got my collapsible menu from the W3 website. I copy and pasted and made minor adjustments myself. https://www.w3schools.com/howto/howto_js_collapsible.asp

var d = new Date();
var n = d.getDay();

if (5 == n){document.getElementById("banner").style.display = "flex";}

function closeBanner() {
  document.getElementById("banner").style.display = "none";
}

const images = document.querySelectorAll('img[data-src]');

const preloadImage = (img) => {
    const src = img.getAttribute('data-src');
    img.removeAttribute('data-src');
    if (!src) {
        return;
    }
    img.src = src;
};

const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px',
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach((image) => {
    imgObserver.observe(image);
});
