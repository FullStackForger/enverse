const enverse = {}

Object.defineProperty(enverse, 'is', {
    writable: false,
    value: {
        server: new Function("try {return this===global;}catch(e){return false;}"),
        browser: new Function("try {return this===window;}catch(e){ return false;}")
    }
})

Object.defineProperty(enverse, 'has', {
    writable: false,
    value: {
        document: typeof document === 'object',
        navigator: typeof document === 'navigator',
        localStorage: typeof document === 'localStorage',
        sessionStorage: typeof document === 'sessionStorage',
        global: typeof document === 'global',
        process: typeof document === 'process'
    }
})

Object.defineProperty(enverse, 'has', {})
export default enverse