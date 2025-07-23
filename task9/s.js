

function toggle(el) {
      
      document.querySelectorAll("ul li").forEach(li => {
        li.style.backgroundColor = "";
       
      });

      
      el.style.backgroundColor = "blue";
      
    }



   
 
  var form = document.getElementById("form");
  var result = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var div = document.createElement('div');
    div.style.color="white"
    div.style.backgroundColor="blue";

    arr=[name,email]
    div.innerHTML =`${arr}`
      
    ;

    result.appendChild(div); 
  });
