
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', ()=>{
    if (window.scrollY >= 100) {
        navigation.classList.add('navigation-scrolled');
        logo.classList.add('logo-scrolled');

    } else {
        navigation.classList.remove('navigation-scrolled');
        logo.classList.remove('logo-scrolled');
    }
})

/* STATS COUNTER */

const total1 =document.querySelector('.total1');
const total2 =document.querySelector('.total2');
const total3 =document.querySelector('.total3');

const handleCount = (containers, totals, levels)=>{
    containers.forEach((container, i)=>{
        const interval = levels[i] === 1 ? 20 : (levels[i] === 2 ? 5 : 1)
    
        let num = 0
        setInterval(()=>{
            if(num <=totals[i]){
                container.textContent = num
            }
            num++
            
        }, interval)

    })

}

function createObserver(element) {
    let observer;
    let options = {
         root: null, 
         rootMargin: "20px", 
         threshold: .5
    };

    const handleIntersect = (entries, observer)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                handleCount([total1, total2, total3], [430, 75, 1000], [2, 1, 3]);
                observer.unobserve(element);
            }
        })
    }
     observer = new IntersectionObserver(handleIntersect, options);
     observer.observe(element);
     
}

const el = document.querySelector('.stats-container');
createObserver(el);
