

function toggle(el) {
      
      document.querySelectorAll("ul li").forEach(li => {
        li.style.backgroundColor = "";
       
      });

      
      el.style.backgroundColor = "blue";
      
    }


var form = document.getElementById("form");
var result = document.getElementById("result");

var users = [];

form.addEventListener("submit", function(event) {
  event.preventDefault();

  
  var name = event.target[0].value;
  var email = event.target[1].value;

  var user = {
    name: name,
    email: email
  };

  users.push(user);

  
  var div = document.createElement('div');
  div.style.color = "white";
  div.style.backgroundColor = "blue";
  div.style.padding = "10px";


  div.innerText = `Name: ${user.name}, Email: ${user.email}`;

  result.appendChild(div);

  
  form.reset();
});
