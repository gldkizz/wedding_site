setTimeout(() => {
    const observer = new IntersectionObserver((entries,options) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section__view')
            }
        })
    })
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section)
    }, { threshold: 0.5 });


    const observerHeader = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('header__view')
            }
        })
    })
    document.querySelectorAll('.header__anim').forEach(head => {
        observerHeader.observe(head)
    })


    const observerPlanLeft = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('left__move')
            }
        })
    })
    document.querySelectorAll('.left').forEach(item => {
        observerPlanLeft.observe(item)
    })

    const observerPlanRight = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('right__move')
            }
        })
    })
    document.querySelectorAll('.right').forEach(item => {
        observerPlanRight.observe(item)
    })
},2000)
    


function timer() {
    let nowDate = new Date()
    let archiveDate = new Date(2024,7,16,14)
    let result = (archiveDate - nowDate)+1000
    let sec = Math.floor((result/1000)%60)
    let min = Math.floor((result/1000/60)%60)
    let hours = Math.floor((result/1000/60/60)%24)
    let days = Math.floor(result/1000/60/60/24)
    if (sec < 10) sec = '0' + sec
    if(min < 10) min = '0' + min
    if(hours < 10) hours = '0' + hours

    document.querySelector('.timer__days-text').innerHTML = days
    document.querySelector('.timer__hours-text').textContent = hours
    document.querySelector('.timer__min-text').textContent = min
    document.querySelector('.timer__sec-text').textContent = sec
    setTimeout(timer, 1000);
}
window.onload = function() {
    timer()
}