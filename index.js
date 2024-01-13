const subscribeBtn=document.querySelector('.subscribe-btn')
const lg_success=document.querySelector('.success-card-lg')
console.log(lg_success)
const sm_success=document.querySelector('.success-card-sm')
const cardContainer=document.querySelector('.newsLetter')
const errMsg=document.querySelector('.error-msg')
let input=document.getElementById('email')


subscribeBtn.addEventListener('click',()=>{

 if (input.value == '') {
   input.classList.add('error')

   input.style.background = 'hsl(4, 94%, 72%)'
  input.style.color = 'white'
   errMsg.classList.remove('hide')
 }else{

lg_success.classList.toggle('hide')
sm_success.classList.toggle('hide')
cardContainer.classList.toggle('hide')
 }







})


const close=document.querySelectorAll('.dismiss-btn')
console.log(close)

close.forEach((item)=>{
    item.addEventListener('click',()=>{
       lg_success.classList.toggle('hide')
       sm_success.classList.toggle('hide')
       cardContainer.classList.toggle('hide') 
    })
})

