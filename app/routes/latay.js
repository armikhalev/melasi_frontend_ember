import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Latay',
    model(){
        let cards = [
            {
                front: 'A',
                back: 'Makes any word an infinitive verb',
                flip: false
            },
            {
                front: 'E',
                back: 'Mark of a direct object, accusative case',
                flip: false
            },
            {
                front: 'I',
                back: 'And',
                flip: false
            },
            {
                front: 'O',
                back: 'Honorification, high style, politeness. "Omaw - please".',
                flip: false
            },
            {
                front: 'U',
                back: 'Some',
                flip: false
            }
        ]

        return cards;
    },
    actions: {
        flipCard (_card) {
            Ember.set(_card, 'flip', !_card.flip)
        }
    }
});