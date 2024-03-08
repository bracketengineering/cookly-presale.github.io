import {
  PinpointEmailClient,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-pinpoint-email";

export async function handler(event: any) {
  const promises1 = emails1.map(async ({ name }) => {
    return await sendEmail(name);
  });
}

async function sendEmail(email: string) {
  const client = new PinpointEmailClient({ region: "eu-west-2" });
  const params: SendEmailCommandInput = {
    Destination: {
      ToAddresses: [email],
    },
    FromEmailAddress: "contact@bracket.software",
    Content: {
      Template: {
        TemplateArn:
          "arn:aws:mobiletargeting:eu-west-2:065472310374:templates/ReferalCodeEmail/EMAIL",
      },
    },
  };
  return await client.send(new SendEmailCommand(params));
}

const emails1 = [
  { name: "opinheir@usc.edu" },
  { name: "liamsaskywalker@gmail.com" },
  { name: "nancyross233@gmail.com" },
  { name: "beavonjames@gmail.com" },
  { name: "ibrahimsarekat@gmail.com" },
  { name: "samuelhenryn@outlook.com" },
  { name: "jeremycolfer03@gmail.com" },
  { name: "lilistiff1001@gmail.com" },
  { name: "amarnahil@yahoo.co.uk" },
  { name: "a3636m@gmail.com" },
  { name: "gigiiodano99@gmail.com" },
  { name: "mm8627o@gre.ac.uk" },
  { name: "eliana.23k@gmail.com" },
];
const emails2 = [
  { name: "jasonaprice99@gmail.com" },
  { name: "mimijenkins80@gmail.com" },
  { name: "rosydreamstudios@gmail.com" },
  { name: "lachlan877@gmail.com" },
  { name: "trisha.01sep@gmail.com" },
  { name: "ezkeels@gmail.com" },
  { name: "accassiacy@gmail.com" },
  { name: "igboinpu@libero.it" },
  { name: "sakshammansukhani2003@gmail.com" },
  { name: "drlydiaariffin@gmail.com" },
  { name: "alexandra.norris25@gmail.com" },
  { name: "wcsong70@gmail.com" },
];
const emails3 = [
  { name: "amarawillis271@gmail.com" },
  { name: "ikmaalkasim@gmail.com" },
];
