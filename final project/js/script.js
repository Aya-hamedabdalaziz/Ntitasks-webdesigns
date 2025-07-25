

var counters = document.querySelectorAll('.counter');
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



  /****/


  var scrollBtn = document.getElementById("scrollTopBtn");

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


  $(document).ready(function(){
  $(".owl-carousel").owlCarousel({items:2 ,margin:30,nav:true, 


responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    }
    

},navText: ['<i class="fa-solid fa-arrow-left bg-primary  text-light fs-4    px-4 rounded-start-5 py-1"></i>', '<i class="fa-solid fa-arrow-right bg-primary text-light ms-2 py-1 rounded-end-pill px-4  fs-4 "></i>']

  });
});



let cards = document.querySelectorAll('.filter-card');

function handleFilter(el, category) {
 
  document.querySelectorAll("ul li").forEach(li => {
    li.classList.remove("active");
  });

 
  el.classList.add("active");

 

  cards.forEach(card => {
    
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      
      if (card.dataset.filter === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}


let myForm = document.getElementById('myForm');
const alert2 = document.querySelector('.text-alert');

const handleError = (element, msg = "") => {
  element.nextElementSibling.innerText = msg;
};

const nameValidation = (element) => {
  let inputValue = element.value.trim();
  inputValue.length < 3
    ? handleError(element, "Enter at least 3 characters")
    : handleError(element);
};

const emailValidation = (element) => {
  let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
  (!regExp.test(element.value.trim()))
    ? handleError(element, "Please enter a valid email containing @")
    : handleError(element);
};

const subjectValidation = (element) => {
  let val = element.value.trim();
  val.length  <1
    ? handleError(element, "Enter a subject")
    : handleError(element);
};

const messageValidation = (element) => {
  let val = element.value.trim();
  val.length < 5
    ? handleError(element, "Message must be at least 5 characters")
    : handleError(element);
};

const checkGlobalError = () => {
  const errors = myForm.querySelectorAll(".text-danger");
  let hasError = false;

  errors.forEach(div => {
    if (div.innerText !== "" && !div.classList.contains("text-alert")) {
      hasError = true;
    }
  });

  if (hasError) {
    alert2.innerText = "Please fix the errors above.";
  } else {
    alert2.innerText = "";
  }
};


myForm.addEventListener('input', function (e) {
  switch (e.target.id) {
    case "userName":
      nameValidation(e.target);
      break;
    case "userEmail":
      emailValidation(e.target);
      break;
    case "userSubject":
      subjectValidation(e.target);
      break;
    case "userMessage":
      messageValidation(e.target);
      break;
  }

  checkGlobalError(); 
});

myForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById("userName");
  const email = document.getElementById("userEmail");
  const subject = document.getElementById("userSubject");
  const message = document.getElementById("userMessage");

  nameValidation(name);
  emailValidation(email);
  subjectValidation(subject);
  messageValidation(message);

  checkGlobalError(); 

  if (alert2.innerText === "") {
    myForm.reset();
  }
});
