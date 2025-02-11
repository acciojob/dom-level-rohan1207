let count = 0;
let element = document.querySelector("#level");

while (element) {
    count++;
    element = element.parentElement; 
}

alert(`The level of the element is: ${count}`);
