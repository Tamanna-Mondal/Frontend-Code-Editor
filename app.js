let iframe = document.querySelector(".iframe");

let allInputs = document.querySelectorAll('.codeSide textarea');
let htmlCode = '', cssCode = '', jsCode = '';

allInputs.forEach((el, index) => {
    el.addEventListener("keyup", () => {
        
        if (index == 0) {
            htmlCode = el.value; 
        } else if (index == 1) {
            cssCode = el.value; 
        } else if (index == 2) {
            jsCode = el.value; 
        }

       
        iframe.contentDocument.body.innerHTML = htmlCode;
        iframe.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;

        
        iframe.contentWindow.eval(jsCode);
    });
});

