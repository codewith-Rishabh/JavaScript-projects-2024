const getcolor = () => {
    const randomNumber = Math.random().toString(16).slice(2, 8).padEnd(6,0);
    const colorcode = "#"+randomNumber
    document.body.style.backgroundColor = colorcode
    document.getElementById("color-code").innerText = colorcode;
}
document.getElementById("btn").addEventListener("click", getcolor)
getcolor();