console.log("Welcome to my javascript Code");
let file = document.getElementById("file");
let btn = document.getElementById("btn");
let file1 = document.getElementById("file1");
let btn1 = document.getElementById("btn1");
let output = document.getElementById("output");
let btn2 = document.getElementById("btn2");
let rl = document.getElementById("rl");
let frame=document.querySelector(".frame")
let area=document.getElementById("area");
let btn6=document.getElementById("text");
function imageToPdf() {
    output.innerHTML = "";
    let url = file.files;
    Array.from(url).forEach(e => {
        let yd = URL.createObjectURL(e);
        let img = document.createElement("img");
        img.src = yd;
        output.appendChild(img);
        output.style.display = "flex";
    })
}
btn.addEventListener("click", imageToPdf);

function fileToPdf() {
    output.innerHTML = "";
    let url = file1.files;
    Array.from(url).forEach(filled => {
        let reader = new FileReader();
        reader.readAsText(filled);
        reader.onload = () => {
            let divN = document.createElement("div");
            divN.innerHTML = reader.result;
            divN.classList.add('divn');
            output.appendChild(divN);
            output.style.display = "flex";
        }
    })

}


function urlToPdf() {
    output.innerHTML="";
    let frame=document.createElement("iframe");
    frame.classList.add(".frame");
    frame.src=rl.value;
    output.appendChild(frame);
    output.style.display="flex";
    frame.style.display="flex";
}
btn2.addEventListener("click", urlToPdf);






btn1.addEventListener("click", fileToPdf);


btn.addEventListener("click", () => {
    setTimeout(() => {
        print();
    }, 1000);
})
btn1.addEventListener("click", () => {
    setTimeout(() => {
        print();
    }, 1000);
})

btn2.addEventListener("click", () => {
    setTimeout(() => {
        print();
    }, 1000);
})



function textToPdf(){
    output.innerHTML="";
    output.innerHTML+=area.value;
    output.style.display="flex";
}

btn6.addEventListener("click",textToPdf);

btn6.addEventListener("click", () => {
    setTimeout(() => {
        print();
    }, 1000);
})



