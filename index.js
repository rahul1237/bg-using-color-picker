const bgclr = document.getElementById('clr')
const hellow = document.querySelector('.hello')

bgclr.addEventListener('input',()=>{
    document.body.style.backgroundColor = bgclr.value

    console.log(bgclr.value);
    if(bgclr.value == "#000000"){
    hellow.style.color = '#fff'
    }
})