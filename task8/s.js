
let userslenght = parseInt(prompt("Enter number of users:"));
let users = [];

  function editusers (){for (let i = 0; i < userslenght; i++) {
 let id = parseInt(prompt(`enter ID  of user ${i + 1}:`));
  let name = prompt(`Enter name for user ${i + 1}:`);
 
  let balance = parseFloat(prompt(`Enter balance for user ${i + 1}:`));

  users.push({id: id, fName: name,b: balance });
}}
console.log(users)
editusers()

let editId = parseInt(prompt("enter ID of user to edit balance:"));
let newBalance = parseFloat(prompt("enter new balance:"));

function editBalanceById(id, balance) {
  let user = users.find(u => u.id === id);
  if (user) {
    user.b = balance;
    
}}

editBalanceById(editId, newBalance);


let delete_id = parseInt(prompt("enter id  to delete:"));

function deleteUserById(id) {
  let i = users.findIndex(u => u.id === id);
  if (i !== -1) {
    users.splice(i, 1);
    console.log(" user deleted.");
  } else {
    console.log(" user not found.");
  }
}

deleteUserById(delete_id);

console.table(users)



