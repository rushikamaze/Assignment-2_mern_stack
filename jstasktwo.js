function sortString() {
    const inputString = document.getElementById('inputString').value;
    
    const sortedString = inputString
        .split('')  
        .sort()     
        .join('');  

    document.getElementById('result').textContent = 
        `Original: ${inputString}\nSorted: ${sortedString}`;
}