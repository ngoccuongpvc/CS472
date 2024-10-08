const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("N can not be negative"));
            return;
        }
        for (let i = 2, s = Math.sqrt(n); i <= s; i++)
            if (n % i === 0) {
                resolve(false);
                return;
            }
        if (n > 1) {
            resolve(true);
        } else {
            resolve(false);
        }
    })
};

(async () => {
    console.log('start');
    try {
        const result = await isPrime(7);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    console.log('end');
})();
// start
// end
// { prime: true }