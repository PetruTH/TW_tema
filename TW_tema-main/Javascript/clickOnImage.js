var nrPhoto = 4, lastPhoto;

function openImage(x){
    document.getElementById("frameDivID").style.display = "block";
    document.getElementById("photo_" + x).style.display = "block";
    lastPhoto = x;
}

function closeImage(){
    document.getElementById("frameDivID").style.display = "none";
    document.getElementById("photo_" + lastPhoto).style.display = "none";
}