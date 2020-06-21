var i = 0; // Start point
var images = [];
var time = 5000;

// Image List
images[0] = '2_1.jpg';
images[1] = '2_2.jpg';
images[2] = '2_3.jpg';
images[3] = '2_4.jpg';
images[4] = '2_5.jpg';
images[5] = '2_6.jpg';

// Change Image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;