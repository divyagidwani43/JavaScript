
const oneWord = function (str) {
    return str.replaceAll(" ", '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    console.log(others, ...others)
    return [first.toUpperCase(), ...others].join(' ');
};
console.log(oneWord("javaScript is hard"))
console.log(upperFirstWord("javaScript is hard"))

// HIGH - ORDER FUNCTION