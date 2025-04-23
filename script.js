let photos = ['ceremony_1.jpg', 'ceremony_2.jpg', 'ceremony_3.jpg', 'couple_1.jpg', 'couple_2.jpg', 'couple_3.jpg', 'family_1.jpg', 'family_2.jpg', 'family_3.jpg', 'vows_1.jpg', 'vows_2.jpg', 'vows_3.jpg', 'vows_4.jpg', 'getting_ready_1.jpg', 'getting_ready_2.jpg', 'getting_ready_3.jpg', 'getting_ready_4.jpg', 'getting_ready_5.jpg', 'dinner_1.jpg', 'dinner_2.jpg'];

function render() {
    let contentRef = document.getElementById('content');
    let quantityRef = document.getElementById('quantity');

    for (let index = 0; index < photos.length; index++) {
        let photo = photos[index];
        contentRef.innerHTML += `<img class="img" onclick="openOverlay(${index})" src="./img/${photo}" alt="wedding photo">`;

        let quantity = photos.length;
        quantityRef.innerHTML = `<span>${quantity} images</span>`;
    }
}

function openOverlay(index) {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.remove('d-none');
    showPhoto(index);
}

function showPhoto(index) {
    let overlayRef = document.getElementById('overlay');
    overlayRef.innerHTML = getShowPhotoTemplate(index);
}

function getShowPhotoTemplate(index) {
    return `
    <div onclick="onclickProtection(event)">
        <div class="overlay-top max-width-1440" >
            <span>${photos[index]}</span>
            <img class="close-img" onclick="closeOverlay()" src="./img/close.png" alt="">
        </div>
        <div class="overlay-main max-width-1440">
            <img class="arrows-img-previos" onclick="previosPhoto(${index})" src="./img/backwards.png" alt="">
            <img class="overlay-img" id="overlayimage" src="./img/${photos[index]}" alt="">
            <img class="arrows-img-next" onclick="nextPhoto(${index})" src="./img/forwards.png" alt="">
        </div>
        <div class="overlay-bottom">
            ${index + 1}/${photos.length}
        </div>
    </div>`;
}

function closeOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.add('d-none')
}

function nextPhoto(index) {
    if (index == (photos.length - 1)) {
        index = -1;
    }
    index++;
    showPhoto(index);
}

function previosPhoto(index) {
    if (index == 0) {
        index = photos.length;
    }
    index--;
    showPhoto(index);
}

// Event bubbling
function onclickProtection(event) {
    event.stopPropagation();
}