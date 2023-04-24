window.addEventListener('load',
    () => {
    localStorage.clear()
})
let input = document.querySelectorAll(".rate input")
let btn = document.querySelector(".btn button")

function go(n) {
    input.forEach((ele) => {
        ele.classList.contains("active") &&
        ele.classList.remove("active")
    })
    input[n].classList.add("active")
    localStorage.setItem("rate", input[n].value)
}

btn.addEventListener('click', () => {
    document.querySelector(".thanks-page .selected span").innerHTML = localStorage.getItem('rate') < 1 ? 0 : localStorage.getItem('rate')
    document.querySelector(".rate-page").style.right = "450px"
    document.querySelector(".thanks-page").style.right = "450px"
})