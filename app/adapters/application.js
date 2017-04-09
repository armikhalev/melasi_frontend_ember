import DRFAdapter from './drf';

export default DRFAdapter.extend({
    host: 'http://localhost:8000',
    namespace: 'koyla',
    addTrailingSlashes: true,
    coalesceFindRequests: true
});
