// const { exec } = require('child_process')
// const path = require('path')
// const fs = require('fs')
// const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
// const mime = require('mime-types')
// const Redis = require('ioredis')


// const publisher = new Redis('')


// const s3Client = new S3Client({
//     region: '',
//     credentials: {
//         accessKeyId: '',
//         secretAccessKey: ''
//     }
// })

// const PROJECT_ID = process.env.PROJECT_ID


// function publishLog(log) {
//     publisher.publish(`logs:${PROJECT_ID}`, JSON.stringify({ log }))
// }

// async function init() {
//     console.log('Executing script.js')
//     publishLog('Build Started...')
//     const outDirPath = path.join(__dirname, 'output')

//     const p = exec(`cd ${outDirPath} && npm install && npm run build`)

//     p.stdout.on('data', function (data) {
//         console.log(data.toString())
//         publishLog(data.toString())
//     })

//     p.stdout.on('error', function (data) {
//         console.log('Error', data.toString())
//         publishLog(`error: ${data.toString()}`)
//     })

//     p.on('close', async function () {
//         console.log('Build Complete')
//         publishLog(`Build Complete`)
//         const distFolderPath = path.join(__dirname, 'output', 'dist')
//         const distFolderContents = fs.readdirSync(distFolderPath, { recursive: true })

//         publishLog(`Starting to upload`)
//         for (const file of distFolderContents) {
//             const filePath = path.join(distFolderPath, file)
//             if (fs.lstatSync(filePath).isDirectory()) continue;

//             console.log('uploading', filePath)
//             publishLog(`uploading ${file}`)

//             const command = new PutObjectCommand({
//                 Bucket: 'vercel-clone-outputs',
//                 Key: `__outputs/${PROJECT_ID}/${file}`,
//                 Body: fs.createReadStream(filePath),
//                 ContentType: mime.lookup(filePath)
//             })

//             await s3Client.send(command)
//             publishLog(`uploaded ${file}`)
//             console.log('uploaded', filePath)
//         }
//         publishLog(`Done`)
//         console.log('Done...')
//     })
// }

// init()

import axios from 'axios';
import fs from 'fs'
// const fs = require('fs');
var dataObj = []
const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/search',
    params: {
        query: 'Phone',
        page: '12',
        country: 'US',
        sort_by: 'RELEVANCE',
        product_condition: 'ALL'
    },
    headers: {
        'x-rapidapi-key': '0f16cf732bmshc8c4d2a723a03d0p104b96jsn4bfd87e1e761',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
};

try {

    let response = await axios.request(options);
    console.log(response.data.data.products);
    console.log(response.data.data);
    // for (let i = 0; i < 3; i++) {
    //     response.data.data.products.forEach(product => {
    //         dataObj.push(product)
    //     })
    //     // dataObj.push(response.data.data.products)
    //     console.log(response.data.data.products);

    // }
    // const filePath = './data.json';
    // console.log(dataObj.length);
    // const x = JSON.stringify(dataObj);
    // const finalJsonObject = {
    //     data: dataObj
    // };

    // // Convert the final JSON object to a string
    // const jsonString = JSON.stringify(finalJsonObject, null, 2);

    // // Write each object in the array to the file as a JSON string on a new line
    // jsonString.forEach(obj => {
    //     stream.write(JSON.stringify(obj) + '\n');
    // });

    // // Close the stream
    // stream.end(() => {
    //     console.log('Successfully wrote file');
    // });


} catch (error) {
    console.error(error);
}