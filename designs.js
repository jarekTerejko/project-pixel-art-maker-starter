// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//function makeGrid() {
//
//    // Your code goes here!
//
//}

$(document).ready(function () {
    $('#sizePicker').submit(function makeGrid(noSubmit) {
        $('tr').remove();
        var row = $('#input_height').val();
        var col = $('#input_width').val();
        for (var i = 1; i <= row; i++) {
            $('#pixel_canvas').append('<tr></tr>');
            for (var j = 1; j <= col; j++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'color-me');
            }
        }
        noSubmit.preventDefault();
        
        $('.color-me').click(function(event) {
            var paint = $('#color_picker').val();
            $(event.target).css('background-color', paint);
        });
    });
});

