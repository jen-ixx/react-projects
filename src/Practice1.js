import React from 'react'

const Practice1 = () => {

  // let firstName = 'Jenish';
  // console.log(firstName);

  // const second = 'Magar';
  // console.log(second);


  // Data types....................................
  // let x = 'Hello World';
  // x = 34;
  // x = false;
  // x = undefined;
  // x = ["HTML", "CSS", "JS"];
  // x = {
  //   name: "Conor Mcgregor",
  //   country: "Ireland"
  // }
  // document.write(x);
  // document.write(typeof x);
  // console.log(x);
  // console.log(typeof x);


  // Airthmetic Operators................................
  // var a = 20;
  // var b = 3;
  // var c = a * b;
  // c = a + b;
  // c = a - b;
  // c = a ** b;
  // a++;
  // c = a + b;
  // c = (a + b) * 2
  // console.log(c);


  // Asignment Operators.................................
  // var a = 10;
  // var b = 3;
  // a += b;
  // a -= b;
  // a *= b;
  // a /= b;
  // a **= b;
  // console.log(a);

  // console.warn("This is warning.");
  // console.clear();


  // Comparision Operator................................
  // var d = 10;
  // var e = "10";
  // console.log(d === e);
  // console.log(2 !== '2');
  // console.log(2 > 6);


  // If statement........................................
  // var f = 100;
  // var g = 100;

  // if (f > g) {
  //   console.log("F is greater")
  // } else {
  //   console.log("F is smaller")
  // }

  // if (f == g) {
  //   console.log("I am IT student")
  // }

  // Logical operators...................................
  // var age = 20;
  // if (age >= 18 && age <= 21) {
  //   console.log("You are eligible");
  // }

  // var age = 22;
  // if (age >= 18 || age <= 21) {
  //   console.log("Yes you are eligibe");
  // }

  // var jen = 10;
  // if (!jen >= 8) {
  //   console.log("It is correct");
  // }

  // If else statement.................................
  // var y = 100;
  // if (y == 100) {
  //   console.log("y is same");
  // } else {
  //   console.log("y is not same");
  // }

  // var name = 'Jenish Magar';
  // var gender = "male";
  // if (gender == "male") {
  //   console.log("Hello Mr." + name);
  // } else {
  //   console.log("Hello Miss." + name);
  // }

  // If Else IF statement...............................
  // var per = 89;
  // or
  // var per = prompt("Enter your percentage: ");
  // if (per >= 80 && per <= 100) {
  //   console.log("You are in merit");
  // } else if (per >= 60 && per <= 80) {
  //   console.log("You are in 1st div");
  // } else if (per >= 45 && per <= 60) {
  //   console.log("You are in 2nd div");
  // } else if (per >= 33 && per <= 45) {
  //   console.log("You are in 3rd div");
  // } else if (per >= 33) {
  //   console.log("You are fail");
  // } else {
  //   console.log("Please enter valid percentage")
  // }

  // Conditional (ternary) operator.....................
  // var a = 100;
  // var b;
  // (a == 100) ? b = "True" : b = "False";
  // console.log(b);

  // Switch statement...................................
  // var day = 1;
  // switch (day) {
  //   case 0:
  //     console.log("Today is Suday");
  //     break;
  //   case 1:
  //     console.log("Today is Monday");
  //     break;
  //   case 2:
  //     console.log("Today is Tudesday");
  //     break;
  //   case 3:
  //     console.log("Today is Wednesday");
  //     break;
  //   case 4:
  //     console.log("Today is Thursay");
  //     break;
  //   case 5:
  //     console.log("Today is Friday");
  //     break;
  //   case 6:
  //     console.log("Today is Saturday");
  //   default:
  //     console.log("Enter th valid day");
  // }


  //Alert Box...................................
  // var a = 10;
  // var b = 20;
  // if (a > b) {
  //   alert("A is greater");
  // } else {
  //   alert("B is greater");
  // }

  // Confirm box...................................
  // var a = confirm("Do you like our website ?");
  // alert(a);

  // Prompt Box.....................................
  // var a = prompt("What is your Name ?");
  // alert(a);

  //Javascripts Functions............................
  // function hello() {
  //   console.log("Hello Everybody");
  // }
  // hello();

  // function mma() {
  //   document.write("Conor Mcgregor");
  // }
  // mma();

  //Function with parameters...........................
  // function hello(fname, lname) {
  //   console.log("Hello" + " " + fname + " " + lname + "<br>");
  // }
  // hello("Jenish", "Magar");
  // hello("Salman", "Khan");

  // function sum(a, b) {
  //   console.log(a + b);
  // }
  // sum(20, 30);

  //Function with return value.........................
  // function fullname(fname, lname) {
  //   var a = fname + " " + lname;
  //   return a;
  // }
  // var fn = fullname("Jenish", "Magar");
  // console.log(fn);

  //Global and local variables.........................
  // var a = 'Sean O Malley';
  // function hello() {
  //   console.log(a);
  // }
  // hello(a);

  //Events.............................................
  // function hello() {
  //   document.write("Hello Everyone");
  // }


  //loop...............................................

  //While loop-1
  // var a = 1;
  // while (a <= 10) {
  //   document.write("Hello Jenish <br>");
  //   a = a + 1;
  // }

  // var a = 10;
  // while (a >= 1) {
  //   document.write("Hello Conor <br>");
  //   a = a - 1;
  // }

  // Do/While loop-2
  // var a = 1;
  // do {
  //   document.write(a + " Hello Magar <br>");
  //   a = a + 1;
  // } while (a <= 10)

  // For loop-3
  // for (var a = 1; a <= 10; a++) {
  //   document.write(a + " Jenish Magar <br>");
  // }

  //Break and continue statement........................
  // for (var a = 1; a <= 10; a++) {
  //   if (a == 3) {
  //     document.write("CodeName : Conor Mcgregor " + a + "<br>");
  //     continue;
  //   }
  //   document.write("Name : Jenish Magar " + a + "<br>");
  // }

  // for (var a = 1; a <= 10; a++) {
  //   if (a == 3) {
  //     document.write("CodeName : Conor Mcgregor " + a + "<br>");
  //     break;
  //   }
  //   document.write("Name : Jenish Magar " + a + "<br>");
  // }

  //Even number with loop..............................
  // for (var a = 1; a < 100; a++) {
  //   if (a % 2 == 0) {
  //     document.write(a + "<br>");
  //   }
  // }

  // Odd number with loop...............................
  // for (var a = 1; a < 100; a++) {
  //   if (a % 2 != 0) {
  //     document.write(a + "<br>");
  //   }
  // }

  // Nested loop........................................
  // for (var a = 1; a <= 100; a = a + 10) {
  //   for (var b = a; b < a + 10; b++) {
  //     document.write(b + " ");
  //   }
  //   document.write("<br>");
  // }

  // for (var a = 1; a <= 5; a++) {
  //   for (var b = 1; b <= a; b++) {
  //     document.write(b + " ");
  //   }
  //   document.write("<br>");
  // }

  // for (var a = 1; a <= 5; a++) {
  //   for (var b = 1; b <= a; b++) {
  //     document.write(a + " ");
  //   }
  //   document.write("<br>")
  // }

  // for (var a = 5; a >= 1; a--) {
  //   for (var b = 1; b <= a; b++) {
  //     document.write(a + " ");
  //   }
  //   document.write("<br>");
  // }

  // for (var a = 5; a >= 1; a--) {
  //   for (var b = a; b <= 1; b--) {
  //     document.write(b + " ");
  //   }
  //   document.write("<br>");
  // }

  // const movieData = {
  // "id": 1,
  //   "movie_name": "The Dark Knight",
  //   "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  //   "director": "Christopher Nolan",
  //   "producer": "Christopher Nolan, Emma Thomas, Charles Roven",
  //   "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  //   "ratings": 9,
  //   "genre": ["Action", "Crime", "Drama"],
  //   "poster": <img src="images/batman.jpeg" alt="" />,
  //   "release_date": "2008-07-18",
  //   "runtime": 152
  // };







  return (

    <div>
      {/* <button onClick={hello}>Click Me</button>
      <p onDoubleClick={hello}>Click on me</p> */}

    </div>
  )
}

export default Practice1
