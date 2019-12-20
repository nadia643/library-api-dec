const chai = require('chai');

describe ('users', () => {
    beforeEach((done) => {
        User.deleteMany({}, () => {
            done();
        });
    });
});



Write a beforeEach hook that removes all data from the database before each test
Add a test that does the following:

    Makes a POST request to your server, sending a JSON body with firstName, lastName, email and password fields
    Asserts that the response status indicates that a new resource has been created
    Uses the _id field from the response body to find the created User document in the database
    Asserts that the created user has the correct firstName, lastName, email and password properties

Write the code to make this test pass