

const myform= document.querySelector("form")
const searchinput= document.querySelector("input")
const messageOne= document.querySelector("#message-1")
const messageTwo= document.querySelector("#message-2")

myform.addEventListener('submit',(e)=>{
   e.preventDefault();
   const location=searchinput.value;

   messageOne.textContent="loading..///be patient sucker"

   messageTwo.textContent = "From Javascript"

   fetch("/weather?address="+location)
.then((data)=>data.json())
.then((data)=>{
    if (data.error){
        messageOne.textContent = data.error;
    } else{
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
    }
})
})

