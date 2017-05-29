import DRFAdapter from './drf';

export default DRFAdapter.extend({
    host: 'http://melasi.pythonanywhere.com',
    namespace: 'koyla',
    addTrailingSlashes: true,
    coalesceFindRequests: true
});
