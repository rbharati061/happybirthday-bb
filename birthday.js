
function typeWriterEffect(text, elementId, speed=50){
    let i=0;
    const element=document.getElementById(elementId);
    element.innerHTML="";
    function type(){
        if(i<text.length){
            element.innerHTML+=text.charAt(i);
            i++;
            setTimeout(type,speed);
        }
    }
    type();
}function openGift(){
    document.getElementById("gift-popup").classList.remove("hidden");
    document.getElementById("birthday-audio").play();
    const message= `💌To my cutest human being,
                     Happy Birthday❤!
                     To the guy, who didn't miss the chance to steal my heart by just being him and only him, the guy who makes my heart race at any moment and to the guy who makes my day worth it just by his presence, I wish you all the happiness you really deserve, I loveyou bebu😘.
                     This is your and only yours day today so, 373km won't stop me from celebrating your day😂 Here's to the beautiful memories and many more ahead🥂.
                      I just missyouu🙁.`;
                      typeWriterEffect(message,"typewriter-message",40);
}


function closeGift(){
    document.getElementById("gift-popup").classList.add("hidden");
    document.getElementById("birthday-audio").pause();
    document.getElementById("birthday-audio").currentTime=0;
}

function goToNextPage(){
    window.location.href="video.html";
}

function showVideo(){
    document.getElementById("video-container").classList.remove("hidden");
    document.getElementById("surprise-video").play();
}

function goBack(){
    window.location.href="index.html";
}