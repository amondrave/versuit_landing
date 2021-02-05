$('document').ready(function () {
    var menuBtn = $('.menu-icon');
    var menu = $('.navigation ul');
    var algo = $('.logotipo')
    menuBtn.click(function () {
        if (menu.hasClass('show')) {
            menu.removeClass('show')
        } else {
            menu.addClass('show')
            console.log("Sirve")
        }

    });
    console.log(menuBtn);
    console.log(menu);
    console.log("HI")
});