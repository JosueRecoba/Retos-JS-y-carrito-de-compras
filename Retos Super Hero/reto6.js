export function checkInString(text, term) {
    const lowerText = text.toLowerCase();
    const lowerTerm = term.toLowerCase();
    return lowerText.includes(lowerTerm);
}