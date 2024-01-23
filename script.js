const gradientbox = document.querySelector(".gradient-box");
const selectmenu = document.querySelector(".select-box select");
const colorinputts = document.querySelectorAll(".color input");
const textarea = document.querySelector("textarea");
const refreshbtn = document.querySelector(".refresh");
const copybtn = document.querySelector(".copy");
const getrandomcolor = () => {
    const randomhex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomhex}`;
}
const generategradient = (israndom) => {
    if (israndom) {
        colorinputts[0].value = getrandomcolor();
        colorinputts[1].value = getrandomcolor();
    }
    const gradient = `linear-gradient(${selectmenu.value}, ${colorinputts[0].value}, ${colorinputts[1].value}`;
    gradientbox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
};
const copycode = () => {
    navigator.clipboard.writeText(textarea.value);
    copybtn.innerText = "Code Copied";
    setTimeout(() => copybtn.innerText = "Copy Code", 1600);
}
colorinputts.forEach(input => {
    input.addEventListener("input", () => generategradient(false));
});
selectmenu.addEventListener("change", () => generategradient(false));
refreshbtn.addEventListener("click", () => generategradient(true));
copybtn.addEventListener("click", copycode);