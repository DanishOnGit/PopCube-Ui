// For Modals
const myModal=document.querySelector(".modal-wrapper");
const closeBtn=document.querySelector("#closeMe");
const closeBtn2=document.querySelector("#closeIt");
const modalLaunch=document.getElementById("launchModal")

modalLaunch.addEventListener("click",()=>myModal.style.display="block");
closeBtn.addEventListener("click",()=>myModal.style.display="none");
closeBtn2.addEventListener("click",()=>myModal.style.display="none");

// For Toasts
const toastWrapper=document.querySelectorAll(".toast-wrapper");
const toastClose=document.querySelectorAll(".close-btn");
const showToastBtn=document.getElementById("showToast");
const exampleToast=document.getElementById("exampleToast");

showToastBtn.addEventListener("click",()=>exampleToast.style.display="block")

for(let i=0;i<toastClose.length;i++)
{
    toastClose[i].addEventListener("click",()=>toastWrapper[i].style.display="none")
}

// For Ratings
const starRatings=document.querySelectorAll(".star-rating-input");
starRatings.forEach((star,index)=>{
    star.addEventListener("change",()=>checkPreviousStars(index))
})
function checkPreviousStars(id){
    if(starRatings[id].checked)
    {for(let i=id-1;i>=0;i--){
       starRatings[i].checked=true
    }}
    else{
        for(let j=id+1;j<starRatings.length;j++){
            starRatings[j].checked=false
        }
    }
}

//For responsive navbar
const navUl=document.getElementById("nav-list")
const hamburger=document.getElementById("hamburger")
hamburger.addEventListener("click",()=>navUl.classList.toggle("active"))