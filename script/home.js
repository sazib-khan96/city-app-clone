// Log out btn click to page redirect 

const LogoutBtn = document.getElementById('Log_out_btn');
LogoutBtn.addEventListener('click',function(){
    setTimeout(function(){
      window.location.href ='index.html'
    },2000)


});

// Card toggle function
function getCard(id) {
    let cards = document.getElementsByClassName('cards');

    // Hide all cards
    for (let card of cards) {
        card.style.display = 'none';
    }

    // Show selected card
    document.getElementById(id).style.display = 'block';
}

// catd toggle system function here 

document.getElementById('account').addEventListener('click', function () {
    getCard('account_card');
});
document.getElementById('type_card').addEventListener('click', function () {
    getCard('card_card');
});
document.getElementById('Loan_card').addEventListener('click', function () {
    getCard('loan_account_card');
});

// all card inside click function 

document.getElementById('account_card').addEventListener('click',function(){
    setTimeout(function(){
        window.location.href = "account_page.html"
    },2000)


})