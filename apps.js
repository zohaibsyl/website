var password = prompt("Enter your password:");
if (password !== "") { 
    if (password.length <= 5) { 
        alert("Password must be greater than 5"); 
    } else { 
        alert("OK"); 
    } 
}

// 2.
if (a === 1) { 
    if (c === "Max") { 
        alert("OK"); 
    } 
}

// 3.
if (a === 1 && c === "Max") { 
    alert("OK"); 
}

// 4.
var num1 = 5, num2 = 5;
if (num1 === num2 && num1 <= num2) { 
    alert("Equal"); 
}


// 1. 
var emptyArray = [];

// 2. 
var stringArray = ["hello"];

// 3. 
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 4. 
var alphabetLength = ["h", "i", "j", "k", "l", "m", "n", "o"].length;

// 5. 
var singleElementArray = ["first element"];
singleElementArray[1] = "second element";
alert(singleElementArray[1]);


// Chapter 16 (Array II)

// 1.
var arrayWithOneElement = ["one element"];
arrayWithOneElement.push("second element");
alert(arrayWithOneElement[arrayWithOneElement.length - 1]);

// 2. 
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();

// 3.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(123);


// Chapter 16 (Array III):

// 1. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

// 2. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);

// 3. 
var oneElementArray = ["first element"];
oneElementArray.unshift("new first element");
alert(oneElementArray[0]);

// 4. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");

// 5. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);

// 6. 
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("dog") + 1, 0, "elephant", "lion");
pets.splice(pets.indexOf("cat"), 3);

// 7. 
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("cat"), 2);

// 8. 
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);


// Chapter 17 - 20 (for Loops):
// 1. 
for (var i = 0; i < 10; i++) {

}

// 2.
for (var i = 0; i <= 11; i++) {

}

// 3. Missing characters: ;<=++
for (var i = 0; i <= 4; i++)

// 4.
for (var j = 0; j < 100; j++) {

}

// 5. 
for (var i = 3; i > 0; i--) {

}

// 6.
var arrayLength = array.length;

// 7.
var flag = true;

// 8.
for (var i = 0; i < pets.length; i++) {

}

// 9.
for (var i = 1; i <= 10; i++) {
    if (i === 2) {
        alert("Counter is: " + i);
        break;
    }
}

// 10.
var userInput = prompt("Enter first name");
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === userInput) {
        alert("Enter");
        break;
    } else {
        alert("Please write correct user name");
    }
}
var password = prompt("Enter your password:");
if (password !== "") { 
    if (password.length <= 5) { 
        alert("Password must be greater than 5"); 
    } else { 
        alert("OK"); 
    } 
}

// 2.
if (a === 1) { 
    if (c === "Max") { 
        alert("OK"); 
    } 
}

// 3.
if (a === 1 && c === "Max") { 
    alert("OK"); 
}

// 4.
var num1 = 5, num2 = 5;
if (num1 === num2 && num1 <= num2) { 
    alert("Equal"); 
}


// 1. 
var emptyArray = [];

// 2. 
var stringArray = ["hello"];

// 3. 
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 4. 
var alphabetLength = ["h", "i", "j", "k", "l", "m", "n", "o"].length;

// 5. 
var singleElementArray = ["first element"];
singleElementArray[1] = "second element";
alert(singleElementArray[1]);


// Chapter 16 (Array II)

// 1.
var arrayWithOneElement = ["one element"];
arrayWithOneElement.push("second element");
alert(arrayWithOneElement[arrayWithOneElement.length - 1]);

// 2. 
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();

// 3.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(123);


// Chapter 16 (Array III):

// 1. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

// 2. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);

// 3. 
var oneElementArray = ["first element"];
oneElementArray.unshift("new first element");
alert(oneElementArray[0]);

// 4. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");

// 5. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);

// 6. 
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("dog") + 1, 0, "elephant", "lion");
pets.splice(pets.indexOf("cat"), 3);

// 7. 
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("cat"), 2);

// 8. 
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);


// Chapter 17 - 20 (for Loops):
// 1. 
for (var i = 0; i < 10; i++) {

}

// 2.
for (var i = 0; i <= 11; i++) {

}

// 3. Missing characters: ;<=++
for (var i = 0; i <= 4; i++)

// 4.
for (var j = 0; j < 100; j++) {

}

// 5. 
for (var i = 3; i > 0; i--) {

}

// 6.
var arrayLength = array.length;

// 7.
var flag = true;

// 8.
for (var i = 0; i < pets.length; i++) {

}

// 9.
for (var i = 1; i <= 10; i++) {
    if (i === 2) {
        alert("Counter is: " + i);
        break;
    }
}

// 10.
var userInput = prompt("Enter first name");
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === userInput) {
        alert("Enter");
        break;
    } else {
        alert("Please write correct user name");
    }
}
