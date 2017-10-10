import Ember from 'ember';

export default Ember.Controller.extend({
  toolsAnimationRules
});

function toolsAnimationRules() {
  this.transition(
    this.fromValue(false),
    this.toValue(true),
    this.use('to-left'),
    this.reverse('to-right')
  );
  this.transition(
    this.fromValue(true),
    this.toValue(true),
    this.use('fade')
  );
}
