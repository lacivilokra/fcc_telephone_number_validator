//regex test method
function telephoneCheck(str) {
    if (/^1?\s?\-?(\(\d{3}\)|\d{3})\-?\s?\d{3}\-?\s?\d{4}$/.test(str)) {
        return true;
    }
    return false;
}