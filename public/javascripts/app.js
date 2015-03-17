var app = app || {};
var ENTER_KEY = 13;
$(function() {
    app.ScrumView=new app.ScrumView();
});


// Get all items from a container
function getItems(container)
{
    var columns = [];

    $(container+ ' ul.column').each(function(){
        columns.push($(this).sortable('toArray').join(','));
    });

    return columns.join('|');
}

$(function() {

    //var itemStr = getItems('#wrapper');
    // itemStr = 'A,B|C,D|E'

    $('.sortable-list').sortable({
        connectWith: '.sortable-list'
    });

    /*$('#btn-get').click(function(){
        alert(getItems('#example-1-2'));
    });*/


});