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

//Global JQUERY dragable functions
$(function() {
    $('.sortable-list').each(function(index){
       var listid=$(this).attr("id").substr(5);
        $(this).sortable({
            connectWith: '.sortable-list',
            receive: function(event, ui) {
                console.log("Neue Statusid"+listid);
                ui.item.trigger('drop', listid);
            }
        });
    });


});