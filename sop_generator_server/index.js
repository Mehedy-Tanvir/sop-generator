const express = require("express");
const app = express();
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();
const port = process.env.PORT || 3000;

// Resend
const resend = new Resend(`${process.env.RESEND_API}`);

// middlewares
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello world");
});
async function run() {
  // Send a ping to confirm a successful connection
  try {
    // send email
    app.post("/sendEmail", async (req, res) => {
      const emailDetails = req.body;
      console.log("api hit");
      res
        .status(200)
        .json({ message: "Email sent successfully", emailDetails });

      //   try {
      //     const emailDetails = req.body;
      //     const userTemplate = `
      //   <p>Dear Mehedy Tanvir,</p>
      //   <p>You have received a new message from a user:</p>
      //   <p><strong>Name:</strong> ${emailDetails.name}</p>
      //   <p><strong>Email:</strong> ${emailDetails.email}</p>
      //   <p><strong>Message:</strong></p>
      //   <p>${emailDetails.message}</p>
      //   <p>Please respond to the user's inquiry promptly.</p>
      // `;

      //     await resend.emails.send({
      //       from: "onboarding@resend.dev",
      //       to: "mehedytanvir451@gmail.com", // Replace with your email address
      //       subject: `New Message from ${emailDetails.name}`,
      //       html: userTemplate,
      //     });

      //     res.status(200).json({ message: "Email sent successfully" });
      //   } catch (error) {
      //     console.error("Error sending email:", error);
      //     res.status(500).json({ error: "Internal Server Error" });
      //   }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
    // console.log("db not connecting");
  }
}
run().catch(console.dir);
app.listen(port, (req, res) => {
  console.log(`Listening at port ${port}`);
});
