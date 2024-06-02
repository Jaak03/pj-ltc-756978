function gcdOfStrings(str1: string, str2: string): string {
    let slice = 1;
    let segment = '';

    // Find the smallest divisor
    do {
        const sub = str2.slice(0, slice++);
        if (
            str1.replace(new RegExp(sub, 'g'), '') === ''
        ) {
            segment = sub;
            break;
        };
    } while (slice <= str2.length);

    // No divisor found
    if (segment === '') return '';

    // Try multiples of that divisor
    let multiples = 1;
    let divisor = '';
    do {
        divisor = segment.repeat(multiples++);
        let regex = new RegExp(`(?=${divisor})`, 'g');
        const parts = (str1.match(regex) || []);
        if (
            parts.length < 0
        ) {
            break;
        }
    } while (divisor.length < str2.length);

    return divisor;
};

export default gcdOfStrings;