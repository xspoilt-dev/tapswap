let count = 0;

function incrementCount() {
    count++;
    document.getElementById('click-count').innerText = count;
}

function openNav() {
    document.getElementById("side-menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-menu").style.width = "0";
}
