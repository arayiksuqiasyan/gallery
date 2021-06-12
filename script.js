const items = document.querySelectorAll(".item")

items.forEach((item) => {
    item.addEventListener("click", function () {
        clear()
        item.classList.add("active")
    })
})


function clear() {
    items.forEach((el) => {
        el.classList.remove("active")
    })
}