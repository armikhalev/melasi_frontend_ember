import DRFAdapter from './drf';

export default DRFAdapter.extend({
    host: 'http://melasi.pythonanywhere.com',
    // host: 'http://127.0.0.1:8000',
    namespace: 'koyla',
    addTrailingSlashes: true,
    coalesceFindRequests: true
});
