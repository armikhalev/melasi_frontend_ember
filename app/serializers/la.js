import application from './application';

export default application.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestindex) {
    for (var index in payload.data) {
      if (payload.data.hasOwnProperty(index)) {
        payload.data[index].type = "la";
      }
    }
    return this._super(...arguments);
  }
});
