function printWelcome(firstName, lastName) {// This function prints a custom welcome message using first and last name
    console.log(`Welcome ${firstName} ${lastName} to Georgian College!`);
}
function convertKmToMiles(km) {// Converts kilometers to miles and returns the result
    const miles = km * 0.621371;
    return miles;
}
// Calculates the factorial of a given number (n)
function factorial(n) {
    if (n < 0) return "Invalid input"; // Negative numbers don’t have factorials
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;}
    return result;
}
// Generates a random password with a specified length
function generatePassword(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];}
    return password;
}
// Exporting the functions so they can be imported elsewhere
export {
    printWelcome,
    convertKmToMiles,
    factorial,
    generatePassword
};
