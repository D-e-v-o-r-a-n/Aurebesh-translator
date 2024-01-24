let textRegular = document.getElementById("normal");
let textAurebesh = document.getElementById("aurebesh-div")


textRegular.addEventListener("input",(event)=>{
    const maxLength = 480;
    
    if(event.target.value.length <= maxLength){
        textAurebesh.innerText = event.target.value;
    } else{
        textRegular.value = textRegular.value.substring(0,maxLength)
    }
})

function GetImage(){
    function saveScreenshot(canvas) {
        const fileName = "Aurebesh_translation";
        const link = document.createElement("a");
        link.download = fileName + ".png";
        console.log(canvas);
        canvas.toBlob(function (blob) {
            // console.log(blob);
            link.href = URL.createObjectURL(blob);
            link.click();
        });
    }
    html2canvas(textAurebesh, {

    }).then(saveScreenshot);
}