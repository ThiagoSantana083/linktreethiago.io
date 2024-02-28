const button = document.querySelector(".switch");
const html = document.querySelector("html");
button.addEventListener("click", ()=> {
    if(html.classList.contains('light')) {
        html.classList.remove('light');
    } else {
        html.classList.add('light');
    }
})