function gcdOfStrings(str1: string, str2: string): string {
    // Checking this first to get it off the bat
    if (str1 === '' || str2 === '') return '';
    
    // Function to check if the entire string can be constructed by repeating the given segment
    function isDivisor(segment: string, str: string): boolean {
        const repeatCount = Math.floor(str.length / segment.length);
        return segment.repeat(repeatCount) === str;
    }

    // Find the greatest common divisor (GCD) length of str1 and str2
    function gcd(a: number, b: number): number {
        return b === 0 ? a : gcd(b, a % b);
    }

    const gcdLength = gcd(str1.length, str2.length);
    const candidate = str1.slice(0, gcdLength);

    // Check if candidate can construct both str1 and str2
    if (isDivisor(candidate, str1) && isDivisor(candidate, str2)) {
        return candidate;
    }

    return '';
};

export default gcdOfStrings;