import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promise1 = signUpUser(firstName, lastName);
    const promise2 = uploadPhoto(fileName);

    // Wait for all promises to settle
    return Promise.allSettled([promise1, promise2])
        .then((results) => {
            // Return an array with the status and value/error of each promise
            return results.map((result) => {
                if (result.status === 'fulfilled') {
                    return {
                        status: 'fulfilled',
                        value: result.value
                    };
                } else {
                    return {
                        status: 'rejected',
                        value: result.reason
                    };
                }
            });
        });
}
