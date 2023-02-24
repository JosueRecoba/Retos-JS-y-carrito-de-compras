export function filterByLength(array) {
    const result = array.filter(palabra => palabra.length >= 4);
    return result;
} 