const bgclr = document.getElementById('clr')
const headingg = document.querySelector('.head')

bgclr.addEventListener('input',()=>{
    document.body.style.backgroundColor = bgclr.value
    console.log(bgclr.value);
    if(bgclr.value.includes('00') || bgclr.value.includes('0a') || bgclr.value.includes('0b') || bgclr.value.includes('0c') || bgclr.value.includes('0d') || bgclr.value.includes('0e') || bgclr.value.includes('0f') ){
        headingg.style.color = '#fff'
    }else{
        headingg.style.color = '#000'
    }
})


