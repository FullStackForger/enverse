import {expect} from 'chai'
import jsdom from 'jsdom'
import {evaluate} from '../src/'

const storage = {}

describe('in the browser', () => {
	let env

	// using function to preserve the scope for evaluate call
	before(function() {

		const storage = {
        getItem: function (key) {
            return this[key];
        },
        setItem: function (key, value) {
            this[key] = value;
        }
    }
		const document = jsdom.jsdom('<!doctype html><html><body></body></html>')
		const windowMock = Object.assign({}, document.defaultView, {
			global: undefined,
			process: undefined,
			document: document,
			navigator: { userAgent: 'node.js' },
			localStorage: storage,
			sessionStorage: storage
		})
		windowMock.window = windowMock

		env = evaluate.call(windowMock)
	})

	it('should detect detect', () => {
		expect(env.is.server).to.be.false
		expect(env.is.browser).to.be.true
	})

	it('should have window', () => {
		expect(env.has.window).to.be.true
	})

	it('should have document', () => {
		expect(env.has.document).to.be.true
	})

	it('should have navigator', () => {
		expect(env.has.navigator).to.be.true
	})

	it('should have localStorage', () => {
		expect(env.has.localStorage).to.be.true
	})

	it('should have sessionStorage', () => {
		expect(env.has.sessionStorage).to.be.true
	})

	it('should not have global', () => {
		expect(env.has.global).to.be.false
	})

	it('should not have process', () => {
		expect(env.has.process).to.be.false
	})
})
