import DS from 'ember-data';

export default DS.Model.extend({
    letter: DS.attr('string'),
    name: DS.attr('string'),
    example: DS.attr('string')
});
