/**
 * Test Data Module
 * Contains all test user data and credentials
 */

module.exports = {
    validUser: {
        email: 'testuser@example.com',
        password: 'Test@123',
        firstName: 'John',
        lastName: 'Doe',
        gender: 'female'
    },
    invalidUser: {
        email: 'invalid@example.com',
        password: 'wrongPassword'
    }
};
