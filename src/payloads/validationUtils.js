export const isValidName = (name) => {
    if (name.length < 5 || name.length > 20) return false;
    if (!/^[A-Za-z0-9 ]+$/.test(name)) return false;
    const digitCount = [...name].filter(char => /\d/.test(char)).length;
    if (digitCount > 3 || digitCount === name.length) return false;
    return true;
};