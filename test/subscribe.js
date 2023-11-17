const amqp = require("amqplib");

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("email");
    channel.consume("email", (message) => {
      const input = JSON.parse(message.content.toString());
      console.log(`Received number: ${input.number}`);
      channel.ack(message);
    });
    console.log(`Waiting for messages...`);
  } catch (ex) {
    console.error(ex);
  }
}
connect();
