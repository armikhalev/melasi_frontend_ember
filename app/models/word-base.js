import DS from 'ember-data';

export default DS.Model.extend({
    word: DS.attr('string'),
    la: DS.attr('string'),
    comment: DS.attr('string')
});
