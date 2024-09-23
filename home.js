// blog-page-js-code


// home-page-js-code
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href="/blog.html"
})
document.getElementById('donate-now').addEventListener('click',function(){
    
    const inputValu = getElementByInputValue('input-value');
    if(isNaN(inputValu)){
        alert('Its not a number please type number ');
        return;
    }
    const textValu = getElementByIdTextValue('donate-blance');
    const newDonate = inputValu + textValu;
    if(inputValu > mainBlance){
        alert('You do not have enough money ')
    }
    document.getElementById('donate-blance').innerText = newDonate;
    const mainBlance = getElementByIdTextValue('main-blace');
    const upadateBlance = mainBlance - inputValu;
    document.getElementById('main-blace').innerText = upadateBlance;


    
    const div = document.createElement('div');
    div.innerHTML = `<p class="text-2xl font-bold text-black border-2 px-4 py-3 rounded-2xl mb-6"> ${inputValu} Taka is Donated for famine-2024 at Feni, Bangladesh </p>`
    
    
    
    document.getElementById('transaction-container').appendChild(div);


})



// document.getElementById('donate-now').addEventListener('click', function() {
//     const inputValue = getElementByInputValue('input-value');
//     const mainBalance = getElementByIdTextValue('main-balance');

//     if (inputValue > mainBalance) {
//         alert('You do not have enough money');
//         return;
//     }

//     if (isNaN(inputValue)) {
//         alert('It\'s not a number, please type a valid number');
//         return;
//     }

//     const donateBalance = getElementByIdTextValue('donate-balance');
//     const newDonateBalance = inputValue + donateBalance;
//     document.getElementById('donate-balance').innerText = newDonateBalance;

//     const newMainBalance = mainBalance - inputValue;
//     document.getElementById('main-balance').innerText = newMainBalance;
// });

