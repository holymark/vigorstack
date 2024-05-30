import { Request, Response } from "express";
import africastalking from "africastalking";

class SmsController {
  private atOptions = {
    apiKey: "8ce7749324ed35237b86642d0c5466bba729ec8a627d45b8cb8670ae9774d2a5",
    username: "sandbox",
  };

  private initAt() {
    return africastalking(this.atOptions);
  }

  public async sendSms(req: Request, res: Response) {
    try {
      const result = await this.initAt().SMS.send({
        to: "+2347056715182",
        message: "Ninja boy holy",
        from: "Hech Mark",
      });
      console.log(res);

      res.status(201).send("message sent");
    } catch (error) {
      res.status(500).send({ message: "Could not send message", error });
    }
  }
}

export default SmsController;
