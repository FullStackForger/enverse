import {expect} from 'chai'
import env from './index'

describe('storage', () => {

	describe('in the browser', () => {

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

	describe('on the server', () => {

		it('should detect detect', () => {
			expect(env.is.server).to.be.true
			expect(env.is.browser).to.be.false
		})

		it('should not have window', () => {
			expect(env.has.window).to.be.false
		})

		it('should not have document', () => {
			expect(env.has.document).to.be.false
		})

		it('should not have navigator', () => {
			expect(env.has.navigator).to.be.false
		})


		it('should not have localStorage', () => {
			expect(env.has.localStorage).to.be.false
		})

		it('should not have sessionStorage', () => {
			expect(env.has.sessionStorage).to.be.false
		})

		it('should have global', () => {
			expect(env.has.global).to.be.true
		})

		it('should have process', () => {
			expect(env.has.process).to.be.true
		})
	})

})
