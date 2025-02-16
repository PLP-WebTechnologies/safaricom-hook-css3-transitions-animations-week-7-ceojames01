// Part 2: JavaScript Functions
function calculateArea() {
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);

    // Local scope
    let area = calculateRectangleArea(width, height);

    document.getElementById("result").textContent = "Area: " + area;
}

function calculateRectangleArea(width, height) {
    return width * height; // Return value
}

let globalVar = "I'm global"; // Global variable
function showScope() {
    let localVar = "I'm local"; // Local variable
    console.log(globalVar);
    console.log(localVar);
}

showScope();


// Part 3: Combining CSS Animations with JavaScript
function toggleAnimation(button) {
    const card = button.parentElement;
    const animatedElement = card.querySelector('.animated-element');

    animatedElement.classList.toggle('animate');
    card.classList.toggle('hidden');

    // Reset the animation after a delay (optional)
    setTimeout(() => {
        animatedElement.classList.remove('animate');
        card.classList.remove('hidden');
    }, 2000); // Adjust delay as needed
}
