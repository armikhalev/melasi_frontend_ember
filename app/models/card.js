import DS from 'ember-data';

export default DS.Model.extend({
    front: DS.attr('string'),
    back: DS.attr('string'),
    flip: DS.attr('boolean'),
    grammarCard: DS.belongsTo('grammarCard', {backgroundReload:true})
});