function disemvowel(str) {
    const str2 = str.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '').replaceAll('A', '').replaceAll('E', '').replaceAll('I', '').replaceAll('O', '').replaceAll('U', '')
    return str2;
}
console.log(disemvowel("This website is for losers LOL!"))