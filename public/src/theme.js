var theme = localStorage.getItem("theme") || "dark";

function themeReload(item){
    localStorage.setItem("theme" , item)
    document.documentElement.setAttribute("data-theme", item);

}
function changeThem(){
    theme = theme === "dark" ? "light" : "dark";
    themeReload(theme)
}

themeReload(theme)


