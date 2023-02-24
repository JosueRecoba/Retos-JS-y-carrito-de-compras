export function addNewAttr(array) {
    const newArray = array.map((element) => {
      element.taxes = Math.trunc(element.price * .19);
    return element;
    });
    return newArray;
}