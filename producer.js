const {kafka} = require('./client')

async function init() {
    const producer = kafka.producer();

    console.log('Connecting Producer')
    await producer.connect();
    console.log('producer Connected Successfully')

    await producer.send({
        topic:'rider-updates',
        messages:[
            {
                partition:0,
                key:"location-update",
                value: JSON.stringify({name:"Naruto",loc:"South-Mumbai"}),
            },
        ],
    });
    await producer.disconnect();
}

init();