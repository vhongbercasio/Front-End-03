// change navbar style on scroll to

window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY > 0);

});

// Show/hide faq answer 

const faqsEL = document.querySelectorAll(".faq");

faqsEL.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        // Change icon 
        const icon = faq.querySelector(".faq_icon i");
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";

        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})