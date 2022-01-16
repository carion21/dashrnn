/*
All loaders here need to meet following requirements:
- their size must depend on the font-size of their parent;
- they must only use the color of their parent;
- they must be single elements with no children elments;
*/



$('button').on('click', function () {
    var number = getRandomInt(1, 40);
    if (number < 10) { number = '0' + number; }
    $(this).html('<div class="loader-' + number + '"></div> Loading...');
    console.log('Resize window to change size and color of the button');
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(window).resize(function () {
    $('button').css('color', 'hsl(' + Math.floor((window.innerWidth / 360) * 100) + ', 70%, 70%)');
});