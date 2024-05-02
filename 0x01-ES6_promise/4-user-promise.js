// 4-user-promise.js

function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
        // Resolve the promise with an object containing firstName and lastName
        resolve({
            firstName: firstName,
            lastName: lastName
        });
    });
}

export default signUpUser;
