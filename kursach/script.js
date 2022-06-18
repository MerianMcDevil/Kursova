


window.onscroll = () => {
    const uppBtn = document.querySelector('.upward')

    if(window.scrollY > 700){
        uppBtn.classList.add('active')
    }else if(window.scrollY < 700){
        uppBtn.classList.remove('active')
    }
}

document.querySelector('.upward').addEventListener('click', () => {
    scrollTo(0,0)
})