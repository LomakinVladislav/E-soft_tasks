function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    };

    let clone = Object.assign({}, obj);

    for (let key of Object.keys(clone)){
        if (typeof obj[key] === "object"){
            clone[key] = deepClone(obj[key])
        } else {
            clone[key] = obj[key]
        }
    }

    return clone;

}

const user = {
    Name: 'Виктор',
    adress: { 
        city: 'Тюмень',
        street: 'Мельникайте',
        building: 12,
    },
};

const cloneUser = deepClone(user);  

console.log(user.adress === cloneUser.adress)