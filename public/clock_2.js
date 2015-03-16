
var Clock = Backbone.Model.extend({ time: new Date() });

var clock = new Clock();

var ClockView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#clock-template').html()),

  initialize: function() {
    this.model.on('change', _.bind(this.render, this))
  },
  render : function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

for(var i = 0; i < 10; i++) {
  var clockView = new ClockView({ model: clock });
  clockView.$el.appendTo('#clocks');
}
setInterval(function () {
  clock.set('time', new Date())
}, 1000);
