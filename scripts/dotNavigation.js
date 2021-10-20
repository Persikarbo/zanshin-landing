$(document).load().scrollTop(0);

const navigatorAnimation = () => {
    const top = document.documentElement.scrollTop;
    let navigationBtns = document.getElementById('navigation').getElementsByTagName('div');
    if (top >= 0 && top <= 740) {
        navigationBtns[0].style.backgroundColor = '#F4F3FF';
        navigationBtns[1].style.backgroundColor = 'transparent';
        navigationBtns[2].style.backgroundColor = 'transparent';
    }
    else if (top > 740 && top < 2000) {
        navigationBtns[0].style.backgroundColor = 'transparent';
        navigationBtns[1].style.backgroundColor = '#F4F3FF';
        navigationBtns[2].style.backgroundColor = 'transparent';
    }
    else {
        navigationBtns[0].style.backgroundColor = 'transparent';
        navigationBtns[1].style.backgroundColor = 'transparent';
        navigationBtns[2].style.backgroundColor = '#F4F3FF';
    }
}

window.addEventListener('scroll', function() {
    navigatorAnimation();
});

function jump(h){
    let top = document.getElementById(h).offsetTop;
    window.scrollTo({top: top, behavior: "smooth"});
    navigatorAnimation();
}
