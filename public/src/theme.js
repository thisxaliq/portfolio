var theme = localStorage.getItem("theme") || "dark";
const button = document.querySelector("[data-themebutton]");

function themeReload(item){
    localStorage.setItem("theme" , item)
    document.documentElement.setAttribute("data-theme", item);
    button.innerHTML = item === "dark" ? "light" : "dark"

}
function changeThem(){
    theme = theme === "dark" ? "light" : "dark";
    themeReload(theme)
}

themeReload(theme)


