const express = require('express');
const app = express();
const port = 3000;


function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}


app.get('/is-prime', (req, res) => {
    const number = req.query.number;

    if (!number) {
        return res.status(400).json({ error: 'Missing "number" query parameter.' });
    }

    const num = Number(number);

    if (isNaN(num) || !Number.isInteger(num)) {
        return res.status(400).json({ error: '"number" must be a valid integer.' });
    }

    const result = isPrime(num);

    res.status(200).json({
        number: num,
        is_prime: result
    });
});

app.listen(port, () => {
    console.log(`Prime Checker API running at http://localhost:${port}`);
});
