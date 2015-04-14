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

    $('.sortable-list').sortable({
        connectWith: '.sortable-list',
        stop: function(event, ui) {
            var listid=$(this).closest('div').attr('id').substr(5);
            ui.item.trigger('drop', $(this).parent().attr("id"),listid);

        }
    });

});