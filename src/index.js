const enverse = {}

Object.defineProperty(enverse, 'is', {
    writable: false,
    value: {
        server: (new Function("try {return this===global;}catch(e){return false;}"))(),
        browser: (new Function("try {return this===window;}catch(e){ return false;}"))()
    }
})

Object.defineProperty(enverse, 'has', {
    writable: false,
    value: {
				window: typeof window === 'object',
        document: typeof document === 'object',
        navigator: typeof document === 'object',
        localStorage: typeof document === 'object',
        sessionStorage: typeof document === 'object',
        global: typeof global === 'object',
        process: typeof process === 'object'
    }
})

Object.defineProperty(enverse, 'has', {})
export default enverse
