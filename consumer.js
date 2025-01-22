const{kafka} =require('./client');
const group = process.argv[2]

// if (!group) {
//   console.error('Error: Consumer groupId must be a non-empty string.');
//   process.exit(1);  // Exit the program with an error code
// }

async function init() {
    const consumer = kafka.consumer({groupId:group});
    await consumer.connect();

    await consumer.subscribe({topics:['rider-updates'], fromBeginning:true}); 
    
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
          console.log(
            `${message}: ${group}: [${topic}]: PART:${partition}:`,
            message.value.toString()
          );
        },
      });
    }
    
    init();