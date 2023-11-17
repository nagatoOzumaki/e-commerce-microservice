const amqp = require("amqplib");

async function connect() {
  const msgBuffer = Buffer.from(
    JSON.stringify({
      to: "riadelhajjaji@gmail.com",
      subject: "my message",
      body: "Hello i am riad",
    })
  );
  try {
    const connection = await amqp.connect("amqp://172.17.0.2:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("email");
    await channel.sendToQueue("email", msgBuffer);
    console.log("Sending message to email queue");
    await channel.close();
    await connection.close();
  } catch (ex) {
    console.error(ex);
  }
}
connect();
