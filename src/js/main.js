window.onload = function () {
    $('#nav_b').on('click', function () {
        $('#nav_c, #nav_b, nav, main').toggleClass('tg');
    });
    $('#nav_c').on('click', function () {
        $('#nav_c, #nav_b, nav, main').toggleClass('tg');
    });
    if (window.location.href == 'https://c-mess.github.io/') {
        var titles = {
            'title': "Cmess' Groovy Place",
            'phrases': [
                'Spice must flow!',
                'Buckle up!',
                'Pure clocktwork.',
                'Spend your leaves here!',
                'Shinji Ikari dislikes our robots.',
                'Long live the LISP!',
                'Hop onto my cdr!',
                'Definitely not a droid you are looking for...',
                'Art of laze.',
                'Petrified lizard.',
                'require("helicopters");',
                'Commonwealth of neurons.',
                'Delimited by infinity.',
                '%tagline%',
                '01011001 01100101 01110000 00101110',
                'Production is tend to break',
                'Unknown reference',
                'F5 Again, kid.',
                'Script piece for main page exclusively'
            ]
        }
        var max = titles.phrases.length - 1,
            rand = Math.floor(Math.random() * max),
            string = titles.title + ' — ' + titles.phrases[rand];
        $('title').text(string);
    }
}