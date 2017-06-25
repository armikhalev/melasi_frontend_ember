import application from './application';

export default application.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    for (var index in payload.data) {
      if (payload.data.hasOwnProperty(index)) {
        payload.data[index].type = "word";
      }
    }
    return this._super(...arguments);
  }
});
