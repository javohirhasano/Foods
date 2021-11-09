const back = document.querySelector(".fixed")
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        back.style.display = "flex"
    }
    else {
        back.style.display = "none"
    }
}

const all_category = document.querySelector(".menu_cards")
const categorys = document.querySelector(".categorys")
const catys = categorys.querySelectorAll("button")
Array.from(catys).forEach((item, index) => {
    item.onclick = (e) => {
        let currBut = categorys.querySelector("button.active")
        currBut.classList.remove("active")
        e.target.classList.add("active")
        all_category.classList = "menu_cards " + e.target.getAttribute('data-food-type')
    }
})
const menus = document.querySelector("menu")
Array.from(menus).forEach((item, index) => {
    item.onclick = (e) => {
        const currbat = menus.querySelector(".menu.active")
        currbat.classList.remove("active")
        item.classList.add("active")
    }
})