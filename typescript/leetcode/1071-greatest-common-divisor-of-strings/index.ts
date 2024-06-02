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
    let multiples = 1, divisor = segment, sub = '';
    do {
        sub = segment.repeat(multiples++);
        if (
            str1.replace(new RegExp(sub, 'g'), '') === ''
            && str2.replace(new RegExp(sub, 'g'), '') === ''
        ) {
            divisor = sub;
        }
    } while (sub.length < str2.length);

    return divisor;
};

export default gcdOfStrings;