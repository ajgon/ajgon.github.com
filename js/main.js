(function ($) {
    $.getJSON('https://www.api.tweecool.com/?screenname=ajgon&count=25', function (data) {
        var $node = $('#recent-tweets').empty();
        var t = 0;
        var count = 0;
        for (t = 0; t < 25; t += 1) {
            if (!data.tweets[t].text.match(/^(?:RT )?@/)) {
                $node.append('<li>' + data.tweets[t].text.replace(/(https?:\/\/[^\s]+[^.])/, '<a href="$1" target="_blank">$1</a>') + '</li>');
                count += 1;
            }
            if (count >= 3) {
                break;
            }
        }
    });
}(jQuery));
