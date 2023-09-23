const slides = document.querySelectorAll(".certi-Img");

var counter = 0;

slides.forEach((slide, n) => {
  slide.style.left = `${n * 100}%`;
});

const next = () => {
  if (counter < slides.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  slideImage();
};

const prev = () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = slides.length - 1;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const navlink = document.querySelectorAll(".navlink");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("cross");
});

navlink.forEach((n) => {
  n.addEventListener("click", () => {
    nav.classList.remove("active");
    menu.classList.remove("cross");
  });
});

navlink.forEach((n) => {
  n.addEventListener("click", () => {
    nav.classList.remove("active");
    menu.classList.remove("cross");
  });
});

// emailjs: https://www.youtube.com/watch?v=l8R7O4zckj8
// email: otcodersanjay@gmail.com
function sendEmail() {
  (function () {
    emailjs.init("dB17FYybI82aBIEYo");
  })();

  var params = {
    sendername: document.querySelector("#name").value,
    to: "sanjaybhandari1211@gmail.com",
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  var serviceID = "service_0pqdkhm"; //Email service ID
  var templateID = "template_hdh7zqn"; //Email template ID

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email Send Successfully!");
    })
    .catch();
}
