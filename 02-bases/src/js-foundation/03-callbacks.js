const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];



function getUserById( id ) {
    users.find( user => user.id === id );
}