function greet(name) {
  console.log("Hello " + name);
}

greet("Bill");

//==========================

function greetTemplate(name) {
  console.log(`Hello ${name}`);
  console.log(`Hello ${name}`.toUpperCase());
}

greetTemplate("John");
//==========================

function createEmail(to, from, subject, message) {
  console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subject}
    Message: ${message}
  `);
}

createEmail("John@mail.com", "Bill@mail.com", "Hello", "How are you doing?");

//================================

function add(x, y) {
  console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add(2, 5) ;

add("2", "5") ;

//====================================

let name = "Bill";
console.log(upperName `Hello ${name}`); //Hello BILL

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}


