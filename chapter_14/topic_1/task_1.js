let user = {
    name: 'John',
};

const wrap = (target) => {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            } else {
                throw new ReferenceError(`Property "${prop}" doesn't exist`)
            }
        }
    });
};

user = wrap(user);

console.log(user.name);
console.log(user.age);
