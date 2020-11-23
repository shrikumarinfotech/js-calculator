# Description
JavaScript calculator

# Usage

## Using within your NodeJs application

Import the app
```
const calculatorApp = require('./calculator-v1.0.0');
```

Define calculator function:
```
const calculator = calculatorApp();
```

### Example: Let's do the math
### addition
```
const addNumbers = calculator.doAddition(5, 190);
console.log(addNumbers); // Expected output: 195
```

### substraction
```
const substituteNumbers = calculator.doSubstraction(80, 6);
console.log(substituteNumbers); // Expected output: 74
```

### multiplication
```
const multiplyNumbers = calculator.doMultiplication(9, 10);
console.log(multiplyNumbers); // Expected output: 90
```

### division
```
const divideNumbers = calculator.doDivision(2, 10);
console.log(divideNumbers); // Expected output: 0.2
```

### percentage
```
const percentageNumbers = calculator.doPercentage(600, 12);
console.log(percentageNumbers); // Expected output: 72
```

### square root numbers
```
const squareRootNumbers = calculator.doSquareroot(81);
console.log(squareRootNumbers); // Expected output: 9
```

## HTML Prototype

Include following `link` tag within your `HTML` file's `<head></head>` element:
```
<link rel="stylesheet" href="./includes/stylesheets/calculator-v1.0.0.css">
```

Include the following before `</body>` of your HTML file:
```
<script src="./calculator-html-prototype-v1.0.0.js"></script>
```

Add the following HTML within your `<body></body>`:
```
<div id="calculator-main" class="calculator-main">
        <div class="calc-display">
            <span id="display-action"></span>
            <textarea id="display-panel" name="display-panel" maxlength="12" rows="1" cols="12" placeholder="0" readonly>0</textarea>
        </div>
        <div class="calc-panel">
            <div class="calc-row">
                <span id="btn-val-7" class="key key-num">7</span>
                <span id="btn-val-8" class="key key-num">8</span>
                <span id="btn-val-9" class="key key-num">9</span>
                <span id="btn-val-x" class="key key-action">x</span>
                <span id="btn-val-/" class="key key-action">/</span>
            </div>
            <div class="calc-row">
                <span id="btn-val-4" class="key key-num">4</span>
                <span id="btn-val-5" class="key key-num">5</span>
                <span id="btn-val-6" class="key key-num">6</span>
                <span id="btn-val-substract" class="key key-action">-</span>
                <span id="btn-val-percent" class="key key-action">%</span>
            </div>
            <div class="calc-row">
                <span id="btn-val-1" class="key key-num">1</span>
                <span id="btn-val-2" class="key key-num">2</span>
                <span id="btn-val-3" class="key key-num">3</span>
                <span id="btn-val-add" class="key key-action">+</span>
                <span id="btn-val-sqrt" class="key key-action">√</span>
            </div>
            <div class="calc-row">
                <span id="btn-val-0" class="key key-num">0</span>
                <span id="btn-val-00" class="key key-num">00</span>
                <span id="btn-val-dot" class="key key-dot">.</span>
                <span id="btn-val-equal" class="key key-result">=</span>
                <span id="btn-val-ac" class="key">AC</span>
            </div>
        </div>
    </div>
```

Finally run the HTML file i.e. `index.html`

# Live URI:
<a href=""></a>