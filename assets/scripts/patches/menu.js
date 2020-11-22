const addToggleMenu = () => {
    const menu = document.getElementById("menu");
    const navbar = document.getElementById("navbar")
    menu.onclick = () => {
        navbar.classList.toggle('expanded')
        menu.classList.toggle('expanded')
    }
}


export default addToggleMenu;