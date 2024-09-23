
function getElementByInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}
function getElementByIdTextValue(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSectionById(id){
    document.getElementById('first-active').classList.add('hidden');
    document.getElementById('Transaction').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}
