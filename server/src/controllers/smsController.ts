import { Request, Response } from "express";
import africastalking from "africastalking";

class SmsController {
  private atOptions = {
    apiKey: "72bfe7b0375e5896ede15b8952736bb2c513a320b578d1f93538d64df01772c1",
    username: "sandbox",
  };

  private initAt() {
    return africastalking(this.atOptions);
  }

  public async sendSms(req: Request, res: Response) {
    try {
      const result = await this.initAt().SMS.send({
        to: req.body.to,
        message: req.body.message,
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
