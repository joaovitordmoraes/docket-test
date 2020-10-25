(function () { 

    fetch('https://picsum.photos/v2/list')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        getImage(data);
    })

    function getImage(data) {
        document.querySelector('.projects-list').insertAdjacentHTML('afterbegin', '<div class="project-carousel"></div>')
        data.forEach(image => {
            const $item = document.querySelector('.project-carousel');
            $item.insertAdjacentHTML('afterbegin', `<div class="carousel-cell"><img src="${image.download_url}" alt=""></div>`);
        });

        setTimeout(() => {
            const $projectOptions = {
                cellAlign: 'left',
                wrapAround: true,
                groupCells: '100%',
                watchCSS: true,
                pageDots: false,
                prevNextButtons: false
            }

            const $carousel = new Flickity('.project-carousel', $projectOptions);
    
            let previousButton = document.querySelector('.arrow.-prev');
        
            previousButton.addEventListener( 'click', function() {
                $carousel.previous();
            });
        
            let nextButton = document.querySelector('.arrow.-next');
        
            nextButton.addEventListener( 'click', function() {
                $carousel.next();
            });
        }, 700);
        
    }

})();