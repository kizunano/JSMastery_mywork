async function loadComponent(selector, path) {
    const response = await fetch(path)
    document.querySelector(selector).innerHTML = await response.text()
}


window.addEventListener("load", async () => {
    await loadComponent("head", "./components/head.html")
    await loadComponent("header", "./components/header.html")
    await loadComponent("footer", "./components/footer.html")
})


const mode = document.querySelector("#mode")
const body = document.querySelector("body")

window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme")
    if (theme == "dark") {
        body.classList.add("dark-theme")
        changeThemeIcon()
    }
})

mode.addEventListener("click", () => {
    body.classList.toggle("dark-theme")
    changeThemeIcon()
    saveTheme()
})

function isDark() {
    return body.classList.toString().includes("dark-theme")
}

function changeThemeIcon() {
    const image = mode.querySelector("img")
    image.src = isDark() ? "./images/night-mode.png" : "./images/light-mode.png"
    

}

function saveTheme() {
    localStorage.setItem("theme", isDark() ? "dark" : "light")
}

document.querySelector("#submit").addEventListener("click", () => {
    console.log(document.querySelector("#recd").value);
})