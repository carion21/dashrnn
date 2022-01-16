
$(document).ready(function () {

    function exa_1(id, titre) {
        var eht = '<li id="lim' + id + '" class="list-group-item">' +
            '<div class="row">' +
            '<button id="dash' + id + '" type="button" class="btn btn-lg btn-dark shadow-lg p-3 rounded btm">' + titre + '</button>' +
            '</div>' +
            '</li>'
        return eht
    }

    var nb = 10
    var wh = $(window).height()

    var panel = $('#panel')
    var dashe = $('#dashe')
    var menu = $('#menu')
    var ulmenu = $('#ulmenu')

    panel.css('height', wh)
    dashe.css('height', wh)
    menu.css('margin-top', wh * 0.025)

    for (let i = 0; i < 10; i++) {
        var j = i + 1
        const eht = exa_1(j, "Graphique " + j)
        ulmenu.append(eht)
    }

})