// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/calculadoraWindows.git

function addToDisplay(value) {
    var display = document.getElementById('display');
    
    if (display.value === 'Error') {
        display.value = '';
    }

    if (value === '.' && display.value.indexOf('.') !== -1) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}