const elements = [1, 2, 3, 4, 5, 6];

function flatten(elements) {
    const flattenedArray = [];
    elements.forEach(item => {
        if (Array.isArray(item)) {
            flattenedArray.push(...flatten(item));
        } else {
            flattenedArray.push(item);
        }
    });
    return flattenedArray;
}

console.log(flatten(elements));
