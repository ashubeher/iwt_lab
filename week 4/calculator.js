function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function append(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

function calculateSin() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = Math.sin(toRadians(parseFloat(currentValue)));
}

function calculateCos() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = Math.cos(toRadians(parseFloat(currentValue)));
}

function calculateTan() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = Math.tan(toRadians(parseFloat(currentValue)));
}

function calculateSqrt() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(parseFloat(currentValue));
}

function calculateLog() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = Math.log10(parseFloat(currentValue));
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}