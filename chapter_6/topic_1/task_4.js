let list = {
    value: 3,
    next: {
        value: 8,
        next: {
            value: 6,
            next: null,
        },
    },
};

const printList = (list = {}) => {
    console.log(list.value);
    if (list.next != null) {
        printList(list.next);
    }
};

console.log(printList(list));
