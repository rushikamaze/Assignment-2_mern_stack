function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

const originalNum = prompt('Please enter a number:');

document.getElementById('originalNumber').textContent = originalNum;
document.getElementById('reversedNumber').textContent = reverseNumber(originalNum);