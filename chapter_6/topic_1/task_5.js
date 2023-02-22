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

const printReverseList = (list = {}) => {
    let tempList = list;
    let result = [];

    while (tempList != null) {
        result.push(tempList.value);
        tempList = tempList.next;
    }

    for (let i = result.length - 1; i >= 0; i--) {
        console.log(result[i]);
    }
};


console.log(printReverseList(list));
