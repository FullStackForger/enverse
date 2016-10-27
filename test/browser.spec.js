import {expect} from 'chai'
import jsdom from 'jsdom'

const storage = {}

describe('in the browser', () => {
	var env

	before(() => {
		global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
		global.window = document.defaultView
		global.navigator = { userAgent: 'node.js' }
		global.localStorage = global.localStorage = storage
		window.localStorage = window.sessionStorage = storage
		const storage = {
        getItem: function (key) {
            return this[key];
        },
        setItem: function (key, value) {
            this[key] = value;
        }
    }
		delete require.cache[require.resolve('../src/index')]
		env = require('../src/index').default
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
		let process
		expect(env.has.global).to.be.false
	})

	it('should not have process', () => {
		let global
		expect(env.has.process).to.be.false
	})
})
