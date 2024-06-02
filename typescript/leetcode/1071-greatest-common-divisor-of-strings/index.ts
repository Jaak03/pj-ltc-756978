function gcdOfStrings(str1: string, str2: string): string {
    if (str2 === '') return str2;

    const match = str1.match(new RegExp(`^(${str2})+`));

    if (!match) return '';
    if (str1 === str2) return str1;

    // if (str2.length % 2 !== 0) return str1;
    if(str1.replace(str2, '') !== '') return str1;

    const divisor = gcdOfStrings(str2, str2.slice(0, str2.length/2));

    if (divisor === '') return str2;

    return divisor;
};

export default gcdOfStrings;