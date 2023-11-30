// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
const { getAge, getUUID } = require('../plugins')

const buildPerson = ({name, birthdate}) => {

    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}

const obj = {name: 'juan', birthdate: '1990-09-27'};

const juan = buildPerson(obj);

console.log(juan);