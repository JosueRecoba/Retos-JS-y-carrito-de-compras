export function filterByTerm(array, term) {
    return array.filter(e => e.toLowerCase().includes(term.toLowerCase()));
    }