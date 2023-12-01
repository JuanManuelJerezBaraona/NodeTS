import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory', () => {

    const getUUID = () => '1234';
    const getAge = () => 35;

    test('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({getUUID, getAge});
        expect(typeof makePerson).toBe('function');

    });

    test('makePerson should return a person', () => {

        const makePerson = buildMakePerson({getUUID, getAge});
        const johnDoe = makePerson({
            name: 'John Doe',
            birthdate: '1990-90-27'
        });
        
        expect(johnDoe).toEqual({
            id: '1234', 
            name: 'John Doe', 
            birthdate: '1990-90-27', 
            age: 35 
        });
        
    });

});