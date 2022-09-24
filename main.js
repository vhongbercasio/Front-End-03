// change navbar style on scroll to


window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY > 0);

})