import { NextResponse } from "next/server";
import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = new Twilio(accountSid, authToken);

console.log(client);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const message = await client.messages.create({
      body: data.message,
      from: twilioPhoneNumber,
      to: data.phone,
    });
    console.log(message);
    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 },
    );
  }
}
