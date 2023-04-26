// This function changes the color of the stock price change if it is positive or negative.
function CheckStock(){
  var change = document.getElementById('pricechange').innerHTML;
  if(change[0] == '+'){
    document.getElementById('pricechange').style.color = 'green';
  }
  if(change[0] == '-'){
    document.getElementById('pricechange').style.color = 'red';
  }
}

function ExampleSearch(){
  var query = document.getElementById('searchbutton').value;
  alert("Sorry, no results found for " + query + ".")
}

// This is *really* not how anyone should _ever_ do passwords on a website.
// Hint: You will also need to add a password <input> tag with the correct ID for this to work.
function CheckLogin(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if(password == "password123"){
    var welcome = document.getElementById('welcome');
    welcome.innerHTML = "Hello, " + username + "."
  }
}