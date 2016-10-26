import {expect} from 'chai'
import env from '../src/index'
import jsdom from 'jsdom'

describe('in the browser', () => {
	before(() => {
		global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
		global.window = document.defaultView
		global.navigator = { userAgent: 'node.js' }
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
