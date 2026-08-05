const BASE_URL="https://api.adviceslip.com/advice";
const number = document.querySelector("#number");
const text = document.querySelector(".description");
const btn = document.querySelector(".dice-btn");

async function getAdvice() {
    try{
    const promise = await fetch(BASE_URL);
    const data = await promise.json();

    number.textContent =`#${data.slip.id}`;
    text.textContent =`"${data.slip.advice}"`;
    }catch (error){
        console.log("Error in fetching .... : ",error)
    }

}

getAdvice();
btn.addEventListener("click",(e)=>{
    e.preventDefault();
     getAdvice();
});