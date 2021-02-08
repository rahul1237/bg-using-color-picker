const bgclr = document.getElementById('clr')

bgclr.addEventListener('input',()=>{
    document.body.style.backgroundColor = bgclr.value
})