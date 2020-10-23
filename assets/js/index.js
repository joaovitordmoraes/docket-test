(function () { 

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
})();