// const {Kafka} = require("kafkajs");

// const kafka = new Kafka({
//     clientId: "my-app",
//     brokers: ["192.168.0.104:9092"],
// });
const {Kafka} = require("kafkajs");

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["192.168.0.104:9092"],
});

async function init() {
    const admin = kafka.admin();
    console.log('Admin connecting...')
    admin.connect();
    console.log('Admin Connection success..')


    admin.createTopics({

        topics: [
            {

            topic: "rider-updates",
            numPartition: 2,
        },
    ],
    });

   
     console.log("topic created success [rider-updates]");
    
     console.log("Disconnecting Admin..");
     await admin.disconnect();
    }

    init().catch(err => console.error('Error in Kafka admin operation:', err)); 
