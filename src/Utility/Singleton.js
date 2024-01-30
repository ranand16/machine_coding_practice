/**
 * @author Rishabh Anand
 * @date 30/01/2024
 */

export const SingletonFunction = (function () {
    let _functionInstance;
    function createInstance() {
        // this is the object/anything else that needs to be shared across the app
        const obj = new Object("This will be shared across the app!");
        return obj;
    }

    return {
        getInstance: function () {
            if (!_functionInstance) _functionInstance = createInstance();
            return _functionInstance;
        },
    };
})();

// or After ES6
export const SingletonFunction2 = (() => {
    var _instance = !_instance && new Object("Object created....");
    return () => _instance;
})();

export class SingletonClsObject {
    // using _ which entails that the variable can only be accessed from self scope
    static _instance = null;
    static getInstance() {
        if (this._instance === null) this._instance = new SingletonClsObject();
        return this._instance;
    }

    // some class property
    rishabh = "anand";

    // we can initialize the variable in the constructor as well, depends
    constructor() {
        this.rishabh = "anand";
    }

    /* you can also add parameters on the constructor & getInstance
     * e.g.
     * static getInstance(param1, param2) {...new Singleton(param1, param2)}
     * constructor(param1, param2) {...}
     */
}
