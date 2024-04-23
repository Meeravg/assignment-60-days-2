

let ImgArr = [
    "https://png.pngtree.com/background/20230512/original/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-picture-image_2503007.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702080000&semt=sph",
    "https://e0.pxfuel.com/wallpapers/692/714/desktop-wallpaper-beautiful-nature-latest-beauty-nature.jpg"
    ]
    
    let image = document.querySelector("img")
    let prev = document.getElementById("prev")
    let startStop = document.getElementById("startStop");
    let next = document.getElementById("next")
    
    currImg = 0;
    let intervalId;
    
    function showImage() {
        image.setAttribute('src', ImgArr[currImg]);
    }
    
    function startSlideshow() {
        intervalId = setInterval(() => {
            currImg++;
            if (currImg >= ImgArr.length) {
                currImg = 0;
            }else if (currImg < 0){
                urrImg = ImgArr.length - 1;
            }
            showImage();
        }, 1000); 
    }
    
    function stopSlideshow() {
        clearInterval(intervalId);
    }
    
    startStop.addEventListener('click', function () {
        if (startStop.textContent === 'Start') {
            startSlideshow();
            startStop.textContent = 'Stop';
        } else {
            stopSlideshow();
            startStop.textContent = 'Start';
        }
    });
    
    prev.addEventListener('click', function () {
        stopSlideshow();
        currImg--;
        if (currImg < 0) {
            currImg = ImgArr.length - 1;
        }
        showImage();
    });
    
    next.addEventListener('click', function () {
        stopSlideshow();
        currImg++;
        if (currImg >= ImgArr.length) {
            currImg = 0;
        }
        showImage();
    });
    
    // Initial image display
    showImage();