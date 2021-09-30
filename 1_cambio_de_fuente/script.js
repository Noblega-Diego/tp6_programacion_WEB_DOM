const miParrafo = document.getElementById("miparrafo");

const bt_p = document.getElementById("bt_p");
const bt_m = document.getElementById("bt_m");
const bt_g = document.getElementById("bt_g");

bt_p.addEventListener("click", (e) => {
    console.log("small");
    miParrafo.className = "small";
})

bt_m.addEventListener("click", (e) => {
    console.log("medium");
    miParrafo.className = "medium";
})

bt_g.addEventListener("click", (e) => {
    console.log("medium");
    miParrafo.className = "big";
})