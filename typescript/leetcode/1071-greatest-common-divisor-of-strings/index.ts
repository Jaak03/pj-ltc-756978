function gcdOfStrings(str1: string, str2: string): string {
    let slice = 0;
    let segment = ''

    // Find the smallest divisor
    do {
        const sub = str2.slice(0, slice++);
        if (
            str1.replace(new RegExp(sub, 'g'), '') === ''
        ) segment = sub;
    } while (slice <= str2.length);

    if (segment === '') return '';

    // Try multiples of that
    const increments =  Math.floor(str1.length / segment.length);
    for (let i = 2; i < increments; i++) {
        const sub = segment.repeat(i);
        if (
            str2.replace(new RegExp(sub, 'g'), '') === ''
        ) return sub;
    }

    return segment;
};

export default gcdOfStrings;