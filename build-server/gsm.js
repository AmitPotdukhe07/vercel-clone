import { request } from 'https';

const options = {
    method: 'GET',
    hostname: 'mobile-phone-specs-database.p.rapidapi.com',
    port: null,
    path: '/gsm/get-models-by-brandname/Samsung',
    headers: {
        'x-rapidapi-key': 'e699cb958amsh23fe284454090d4p15ca71jsnc1d832dd94c1',
        'x-rapidapi-host': 'mobile-phone-specs-database.p.rapidapi.com'
    }
};

const req = request(options, function (res) {
    const chunks = [];

    res.on('data', function (chunk) {
        chunks.push(chunk);
    });

    res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();