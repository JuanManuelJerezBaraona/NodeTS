const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age')

const buildPerson = ({name, birthdate}) => {

    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}

const obj = {name: 'juan', birthdate: '1990-09-27'};

const juan = buildPerson(obj);

console.log(juan);