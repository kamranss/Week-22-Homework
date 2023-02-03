$function();{
    var header = $(nav);
    var backgrounds = new Array
        url(img/rainbow.jpg)
        url(img/chickens_on_grass.jpg)
        url(img/cattle_on_pasture.jpg)
        url(img/csa_bundle.jpg)
};
    var current = 0;

    function nextBackground() {
        header.css(background,backgrounds[current = ++current % backgrounds.length]);
        setTimeout(nextBackground, 10000);
    }

    setTimeout(nextBackground, 10000);
    header.css(background, backgrounds[0]);