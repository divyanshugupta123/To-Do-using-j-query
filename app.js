let a = $('#container');
let b = $('#in');
let c = $('#list');


b.keypress(function (e) {
    if (e.which === 13) {
        let d = $(this).val();
        // console.log(d);
        $(this).val(''); // after adding it in list the input become empty
        c.append(`<li><span>X</span> ${d}</li>`);

    }

})


// mark as complete => addEventListener() is on() in jquery
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
})




// deleted a task
// on click event provides us childElement as a argument

$('ul').on('click', 'span', function (e) {
    e.stopPropagation(); //to stop event bubbling
    $(this).parent().fadeOut(600, function () {
        $(this).remove();
    })//600 ms baad hatt jaaaega
})



// toggle input
$('#add').click(function(){
    $('input').fadeToggle(100);
    $('#list').fadeToggle(100);
})