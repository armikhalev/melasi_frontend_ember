import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    comment: DS.attr('string'),
    category: DS.attr('string')
});
