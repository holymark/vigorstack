import africastalking from "africastalking";

const at = africastalking({
  apiKey: "8ce7749324ed35237b86642d0c5466bba729ec8a627d45b8cb8670ae9774d2a5",
  username: "sandbox",
});
(async function sendSms() {
  const res = await at.SMS.send({
    to: "+2347056715182",
    message: "Ninja boy holy",
    from: "Hech Mark",
  });
  console.log(res);
})();
