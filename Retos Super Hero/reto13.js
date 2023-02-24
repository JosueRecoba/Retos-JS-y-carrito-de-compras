export function findMyKey(array) {
    const index = array.indexOf('myKey');
    if (index >= 0) {
    return index;
    }
    return false;
}