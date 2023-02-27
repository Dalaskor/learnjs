const handlers = Symbol('handlers');

const makeObservable = (target) => {
    target[handlers] = [];

    target.observe = function(handler) {
        this[handlers].push(handler);
    };

    return new Proxy(target, {
        set(target, prop, value, receiver) {
            let success = Reflect.set(...arguments);
            if (success) {
                target[handlers].forEach(handler => handler(prop, value));
            }
        }
    });
};

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = 'John';
