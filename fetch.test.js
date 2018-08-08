const assert = require('assert');
const fetchMock = require('fetch-mock'); 

const fetchJSON = require('./fetch');

describe('fetchJSON', () => {
	before(() => {
		fetchMock.get('http://api.example.com/resource/1234', { ok: true }).catch();
	});
	after(() => {
		fetchMock.reset();
		fetchMock.restore();
	});
	it('fetches data', () => {
		return fetchJSON('http://api.example.com/resource/1234').then((data) => {
			assert.strictEqual(data.ok, true);
		});
	});
});
