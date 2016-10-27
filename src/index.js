/**
 * Evaluates environment available from the current scope and returns env object.
 * Helper method created to facilitate testing.
 */
export const evaluate = function() {
	const enverse = {}

	Object.defineProperty(enverse, 'is', {
			writable: false,
			value: {
					server: (() => { try { return this===this.global } catch(e) { return false }})(),
					browser: (() => { try { return this===this.window } catch(e) { return false }})(),
			}
	})

	Object.defineProperty(enverse, 'has', {
			writable: false,
			value: {
					window: typeof this.window === 'object',
					document: typeof this.document === 'object',
					navigator: typeof this.navigator === 'object',
					localStorage: typeof this.localStorage === 'object',
					sessionStorage: typeof this.sessionStorage === 'object',
					global: typeof this.global === 'object',
					process: typeof this.process === 'object'
			}
	})

	return enverse
}

// Evaluate environment from global (server) or window (browser) level
const env = evaluate.call((new Function('return this'))())
export default env
