// blog-page-js-code


// home-page-js-code
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href="./blog.html"
})
document.getElementById('donate-now').addEventListener('click',function(){
    
    const inputValue = getElementByInputValue('input-value');
    if(isNaN(inputValue)){
        alert('Its not a number please type number ');
        return;
    }
    const mainBlance = getElementByIdTextValue('main-blace');
    if(inputValue > mainBlance){
        alert('You do not have enough money');
        return;
    }
    if(inputValue <= 0){
        alert('Negative Value is not Allowed');
        return;
    }

    const textValue = getElementByIdTextValue('donate-blance');
    const newDonate = inputValue + textValue;
    document.getElementById('donate-blance').innerText = newDonate;
    const upadateBlance = mainBlance - inputValue;
    document.getElementById('main-blace').innerText = upadateBlance;

    const div = document.createElement('div');
    div.innerHTML = `<p class="text-2xl font-bold text-black border-2 px-4 py-3 rounded-2xl mb-6"> ${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh </p> <p> ${new Date()}
    </p>`

    
    document.getElementById('transaction-container').appendChild(div);

    document.getElementById('my_modal_1').showModal()


})



// secound section code 
document.getElementById('flood-donate').addEventListener('click', function(){
    const floodInputValue = getElementByInputValue('flood-input-blance');
    if(isNaN (floodInputValue)){
        alert('Its not a number please type number  ');
        return;
    }
    const mainBlance = getElementByIdTextValue('main-blace');
    if(floodInputValue > mainBlance){
        alert ('You do not have  enough blance ')
        return;
    }
    if( floodInputValue <= 0){
        alert('Negative mark is not count')
        return
    }

    
    const textFloodValue = getElementByIdTextValue('flood-add-blance');
    const newFloodValue = floodInputValue + textFloodValue;
    document.getElementById('flood-add-blance').innerText = newFloodValue;

    const floodUpdateBlance = mainBlance - floodInputValue;
    document.getElementById('main-blace').innerText = floodUpdateBlance;

    const div = document.createElement('div');
    div.innerHTML = `<p class="text-2xl font-bold text-black border-2 px-4 py-3 rounded-2xl mb-6"> ${floodInputValue} Taka is Donated for Flood Relief in Feni, Bangladesh </p> <p> ${new Date()}
    </p>`
 
    document.getElementById('transaction-container').appendChild(div);

    document.getElementById('my_modal_1').showModal()

})

document.getElementById('quata-donate').addEventListener('click', function(){
    const quataInputValue = getElementByInputValue('quata-input');
    if(quataInputValue <=0){
        alert('Nagetive mark its not count')
        return;

    }
    if(isNaN(quataInputValue)){
        alert('please type a number ')
        return;
    }
    const textQuateValue = getElementByIdTextValue('quata-blance');
    const quataBlance = quataInputValue + textQuateValue;
    document.getElementById('quata-blance').innerText = quataBlance;

    const mainBlance = getElementByIdTextValue('main-blace');
    if(quataInputValue > mainBlance){
        alert('You do not have enough money ')
        return;
    }
    const updateQuataBlance = mainBlance - quataInputValue;
    document.getElementById('main-blace').innerText = updateQuataBlance;

    const div = document.createElement('div');
    div.innerHTML = `<p class="text-2xl font-bold text-black border-2 px-4 py-3 rounded-2xl mb-6"> ${quataInputValue} Taka is Donated for Flood Relief in Quata, Bangladesh </p> <p> ${new Date()}
    </p>`
    
 
    document.getElementById('transaction-container').appendChild(div);
    document.getElementById('my_modal_1').showModal()

})




