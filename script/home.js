

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
// footer item btn toggle function 
function footerItemColor (id){
  const itemBtn = document.getElementsByClassName('footer_item_btn');
  for(let btn of itemBtn){

    btn.classList.remove('footer_btn')
  }
    
    
  
  document.getElementById(id).classList.add("footer_btn")

}


// fotter section icon addEventListener start here 
function changContetn (id){
    const allContainer = document.getElementsByClassName('container');
    for(let itemContainer of allContainer){
        itemContainer.style.display= "none";
        itemContainer.classList.remove("slide_right")
       

    }
    const activeContainer = document.getElementById(id)
    activeContainer.classList.add('slide_right')
    
    activeContainer.style.display = "block"

}

document.getElementById('account_container_btn').addEventListener('click',function(){
    changContetn('account_sec_container')
    footerItemColor('account_container_btn')
   
})
document.getElementById('transfer_container_btn').addEventListener('click',function(){
    changContetn('transfer_sec_container')
     footerItemColor('transfer_container_btn')
})
document.getElementById('Qr_container_btn').addEventListener('click',function(){
    changContetn('account_container_btn')
    footerItemColor('Qr_container_btn')
})
document.getElementById('payment_container_btn').addEventListener('click',function(){
    changContetn('payment_Sec_container')
    footerItemColor('payment_container_btn')
    
})
document.getElementById('explore_container_btn').addEventListener('click',function(){
    changContetn('exolore_sec_container')
    footerItemColor('explore_container_btn')
   
})
