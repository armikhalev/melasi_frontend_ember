import DRFSerializer from './drf';

export default DRFSerializer.extend({
        normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
        let convertedPayload = {};

        payload[0]["grammar-card"] = payload[0].grammarCard.id;
        delete payload[0].grammarCard;

        convertedPayload[primaryModelClass.modelName] = JSON.parse(JSON.stringify(payload));

        convertedPayload.cards = convertedPayload.card;
        delete convertedPayload.card;

        convertedPayload.cards[0]["grammarCard"] = convertedPayload.cards[0]["grammar-card"];
        delete convertedPayload.cards[0]["grammar-card"];

        console.log("AWESOME!", payload[0], convertedPayload);
        return this._super(...arguments);    
    }
});
