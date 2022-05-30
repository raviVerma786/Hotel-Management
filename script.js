var images = ['service.jpg','contact.jpg'];
function changePicture() {
    // document.body.style.backgroundImage = images[i]
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePicture()", slideTime);
}

window.onload = changePicture;