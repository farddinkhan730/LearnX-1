function sidemenu(side) {
    var menu = document.getElementById("sidemenu");
    if (side == 0) {
        menu.style = "transform: translateX(0vh); position:fixed;";
    } else {
        menu.style = "transform: translateX(-100%);";
    }
    side++;
}