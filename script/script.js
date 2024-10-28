'use strict';

const buttonNumber = document.querySelectorAll('#number');
const dot = document.querySelector('#dot');
const operatorButtons = document.querySelectorAll('#operator');
const res = document.querySelector('.result');
const equls = document.querySelector('#equls');
const ereseAll = document.querySelector('#ereseAll');
const erese = document.querySelector('#erese');
const change = document.querySelector('#change');

let currentNumber = '';
let numbersTable = [];
let operators = [];

buttonNumber.forEach(num => {
    num.addEventListener('click', () => {
        currentNumber += num.textContent;
        res.textContent = currentNumber;
    });
});

dot.addEventListener('click', () => {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        res.textContent = currentNumber;
    }
});

operatorButtons.forEach(ope => {
    ope.addEventListener('click', () => {
        if (currentNumber) {
            numbersTable.push(parseFloat(currentNumber));
            operators.push(ope.textContent);
            currentNumber = '';
            res.textContent = ope.textContent; 
        }
    });
});

erese.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);

    if (!currentNumber) { 
        res.textContent = '0000000';
    } else {
        res.textContent = currentNumber;
    }
});

change.addEventListener('click', () => {
    if (currentNumber) { 
        currentNumber = -parseFloat(currentNumber);
        res.textContent = currentNumber;
    }
});

equls.addEventListener('click', () => {
    if (currentNumber) {
        numbersTable.push(parseFloat(currentNumber)); 
        let result = numbersTable[0]; 
        for (let i = 0; i < operators.length; i++) {
            const operator = operators[i];
            const nextNumber = numbersTable[i + 1];

            switch (operator) {
                case '+':
                    result += nextNumber;
                    break;
                case '-':
                    result -= nextNumber;
                    break;
                case '*':
                    result *= nextNumber;
                    break;
                case '/':
                    result /= nextNumber;
                    break;
            }
        }

        res.textContent = result;
        currentNumber = ''; 
        numbersTable = []; 
        operators = []; 
    }
});

ereseAll.addEventListener('click', () => {
    res.textContent = '0000000';
    currentNumber = ''; 
    numbersTable = []; 
    operators = []; 
});