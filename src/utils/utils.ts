export function getRandomArbitrary(min, max) {
    const minCeil = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - minCeil + 1)) + minCeil;
}
