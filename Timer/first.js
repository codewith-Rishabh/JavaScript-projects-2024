const enddate = "14 jun 2025 12:15 PM"
document.getElementById("end-date").innerText = enddate;

const inputs = document.querySelectorAll("input")
function clock() {

const end = new Date(enddate);
const now = new Date();
const diff = (end - now )/1000;

if(diff < 0) return;

inputs[0].value = Math.floor(diff/3600/24);
inputs[1].value = Math.floor(diff/3600)%24;
inputs[2].value = Math.floor(diff/60)%24;
inputs[3].value = Math.floor(diff)%60;

}
// first call
clock()

setInterval(
    () => {
        clock()
    },
    1000
)
