// responsive

let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

const menuFirstOption = document.querySelector("#feat-link")
const menuSecondOption = document.querySelector("#how-it-works-link")
const menuThirdOption = document.querySelector("#pricing-link")

menuFirstOption.addEventListener("click", () => {
    document.body.style.overflow = "initial"

    menuSection.classList.toggle("on")
    show = !show

})

menuSecondOption.addEventListener("click", () => {
    document.body.style.overflow = "initial"

    menuSection.classList.toggle("on",)
    show = !show
})

menuThirdOption.addEventListener("click", () => {
    document.body.style.overflow = "initial"

    menuSection.classList.toggle("on")
    show = !show
})

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show
})