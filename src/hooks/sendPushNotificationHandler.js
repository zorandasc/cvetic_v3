function sendPushNotificationHandler(name, email, message) {
  fetch("https://svadbeni-cvet-notifikator.onrender.com/api/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        //send to catch
        return Promise.reject(response.status);
      }
      console.log("Success of sending pushonju");
    })
    .catch((error) => {
      console.error("There was an error sending PushNotification!", error);
    });
}

export default sendPushNotificationHandler;
