//this is my js for mobile toogle
const humberger =document.querySelector(".mobile-navigation");
const navlinks =document.querySelector(".navigation-links");

humberger.addEventListener("click",() =>{navlinks.classList.toggle("active")});

//this is for my faqs
document.querySelectorAll(".actual-faq").forEach(faq=>{
    faq.addEventListener('click',() => {
        const answer= faq.querySelector(".faq-answer");
        const toggleicon = faq.querySelector(".faq-toggle");
        if (answer.style.display === "none") {
            answer.style.display = "block";
            toggleicon.src = "icons/minus.svg";
        } 
        else {
            answer.style.display = "none";
            toggleicon.src = "icons/plus.svg";
        }
    });
});
