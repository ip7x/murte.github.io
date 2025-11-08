const modal = document.getElementById('popup-modal');
const letterImage = document.querySelector('.letter-image');
const closeButton = document.querySelector('.close-button');
const closeButtonFooter = document.querySelector('.close-button-footer');
const musicToggleButton = document.getElementById('music-toggle-btn');
const audio = document.getElementById('background-music');
const backgroundAnimation = document.querySelector('.background-animation');

letterImage.addEventListener('click', function() {
    modal.style.display = 'block';
    
    // محاولة تشغيل الصوت والتعامل مع أي خطأ محتمل بسبب سياسات المتصفح
    let playPromise = audio.play();

    if (playPromise !== undefined) {

        playPromise.then(_ => {
            // التشغيل التلقائي نجح
            musicToggleButton.textContent = 'إيقاف الموسيقى';
        }).catch(error => {
            // التشغيل التلقائي فشل، لا بأس، المستخدم يمكنه الضغط على زر التشغيل
            console.log("Autoplay was prevented. User needs to interact with the music button.");
        });
    }
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

closeButtonFooter.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

musicToggleButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        musicToggleButton.textContent = 'إيقاف الموسيقى';
    } else {
        audio.pause();
        musicToggleButton.textContent = 'تشغيل الموسيقى';
    }
});

const numberOfShapes = 20;

for (let i = 0; i < numberOfShapes; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    shape.innerHTML = '🌸';
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.animationDuration = `${Math.random() * 5 + 5}s`;
    shape.style.animationDelay = `${Math.random() * 5}s`;
    shape.style.width = `${Math.random() * 60 + 20}px`;
    shape.style.height = shape.style.width;
    shape.style.opacity = Math.random();
    backgroundAnimation.appendChild(shape);
}
