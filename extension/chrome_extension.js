var bgl1;
bgl1 = Array.from(document.getElementsByClassName("kix-page"));

function flashRed() {
    bgl1.forEach(
    function(element, index, array) {
        element.style = "overflow-x: auto; border: 2px solid #ffcfcf; cursor: auto; touch-action: pan-x pan-y;";
    });
    setTimeout(flashGrey,20);
}
function flashGrey() {
    bgl1.forEach(
    function(element, index, array) {
        element.style = "overflow-x: auto; border: 2px solid #ffffff; cursor: auto; touch-action: pan-x pan-y;";
    });
    setTimeout(flashRed, 20);
}

flashRed()