import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !fromNumber) {
  console.warn("Twilio credentials not configured. SMS functionality will be disabled.");
}

const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export async function sendConfirmationSMS(mobile: string, fullName: string): Promise<void> {
  if (!client) {
    throw new Error("Twilio client not initialized. Check your environment variables.");
  }

  const message = `नमस्कार ${fullName}! तुमची नवी उमंग मध्ये नोंदणी यशस्वी झाली आहे. स्वयंसेवकाच्या संधींसाठी आम्ही लवकरच संपर्क करू. आमच्या मिशनमध्ये सामील झाल्याबद्दल धन्यवाद!`;

  try {
    await client.messages.create({
      body: message,
      from: fromNumber,
      to: `+91${mobile}` // Assuming Indian numbers, adjust country code as needed
    });
    
    console.log(`SMS sent successfully to ${mobile}`);
  } catch (error) {
    console.error(`Failed to send SMS to ${mobile}:`, error);
    throw error;
  }
}
