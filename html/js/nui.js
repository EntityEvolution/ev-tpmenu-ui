const doc = document

const before = doc.getElementById('before');
const after = doc.getElementById('after');

const slides = doc.getElementsByClassName('container-wrap');
const slideNum = doc.getElementById('num-slides');
const slideDesc = doc.getElementById('desc-slides')

const main = doc.getElementById('main');

let currentSlide = 1;

window.addEventListener('load', () => {
    after.addEventListener('click', () => slideChanger('after'));
    before.addEventListener('click', () => slideChanger('before'));
})

// Fetching NUI
const fetchNUI = async (cbname, data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    };
    const resp = await fetch(`https://ev-tpmenu-ui/${cbname}`, options);
    return await resp.json();
}

// Slides function
function slideChanger(type) {
    if (slides.length > 0) {
        if (type == 'after') {
            currentSlide++
            if (currentSlide > slides.length) {
                currentSlide = 1;
            }
        } else if (type == 'delete') {
            if (slides.length == 1) {
                slides[currentSlide - 1].remove();
                slideNum.textContent = `0 /${slides.length}`;
            } else if (slides.length > 1) {
                if (currentSlide != 1) {
                    currentSlide--
                    slides[currentSlide].remove();
                } else {
                    slides[currentSlide - 1].remove();
                }
                slides[currentSlide - 1].style.opacity = "1";
                slideNum.textContent = `${currentSlide} / ${slides.length}`;
                slideDesc.textContent = slides[currentSlide - 1].getAttribute('data-desc');
            }
            return
        } else {
            currentSlide--
            if (currentSlide < 1) {
                currentSlide = slides.length;
            }
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = "0";  
        }
        slides[currentSlide - 1].style.opacity = "1";
        slideNum.textContent = `${currentSlide} / ${slides.length}`;
        slideDesc.textContent = slides[currentSlide - 1].getAttribute('data-desc');
    }
}

window.addEventListener(`DOMContentLoaded`, () => {
    fetch(`../slides.json`)
        .then((response) => response.json())
        .then((data) => {
            createSlides(data);
        })
        .catch((error) => {
            console.error('Error: ' + error);
        });
})

let i = 0
function createSlides(data) {
    const cont = doc.getElementById('container');
    data.forEach(dataItem => {
        i++
        const wrap = doc.createElement('div');
        const img = doc.createElement('img');
        const title = doc.createElement('span');
        const btn = doc.createElement('button');

        wrap.classList.add('container-wrap');
        img.classList.add('wrap-img');
        title.classList.add('wrap-title');
        btn.classList.add('wrap-btn');

        img.src = dataItem.image;
        title.textContent = dataItem.title;
        btn.textContent = dataItem.button;

        wrap.setAttribute('data-desc', dataItem.description);
        btn.addEventListener('click', () => fetchNUI('getDataCoords', {x: dataItem.x, y: dataItem.y, z: dataItem.z, heading: dataItem.heading}))
        if (i == 1) {
            wrap.style.opacity = '1';
        }

        wrap.appendChild(img);
        wrap.appendChild(title);
        wrap.appendChild(btn);
        cont.appendChild(wrap);
    });
    slideNum.textContent = `1 / ${slides.length}`;
}