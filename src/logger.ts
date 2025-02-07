class Logger {
    #debug: boolean
    static #instance: Logger|null=null

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Logger()
        }
        return this.#instance
    }
    createLogger(debug:boolean=false) {
        const l= new Logger()
        if(debug){
            l.enableDebug()
        }
        return l
    }

    private constructor() {
        this.#debug = import.meta.env.DEV
    }

    enableDebug() {
        this.#debug = true
    }

    log(...args: any[]) {
        if (this.#debug) {
            console.log(...args)
        }
    }

    debug(...args: any[]) {
        if (this.#debug) {
            console.debug(...args)
        }
    }

    info(...args: any[]) {
        if (this.#debug) {
            console.info(...args)
        }
    }

    error(...args: any[]) {
        console.error(...args)
    }

    warn(...args: any[]) {
        console.warn(...args)
    }

}

export const logger = Logger.getInstance()