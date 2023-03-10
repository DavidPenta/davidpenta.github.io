
function toggleNav() {
    let isClose = document.getElementById("sidebar").style.width === "0px";
    document.getElementById("sidebar").style.width = isClose ? "250px" : "0";
}