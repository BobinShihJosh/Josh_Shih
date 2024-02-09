import axios from "axios";

export default async (req, context) => {
  // const requestKey = req.headers.get("X-API-Key");
  try {
    const body = await req.json();

    // Now you can access the data in the body
    const { from_name, to_name, from_email, to_email, message } = body;

    var emailJsPayload = {
      service_id: Netlify.env.get("VITE_APP_EMAILJS_SERVICE_ID"),
      template_id: Netlify.env.get("VITE_APP_EMAILJS_TEMPLATE_ID"),
      user_id: Netlify.env.get("VITE_APP_EMAILJS_PUBLIC_KEY"),
      template_params: {
        from_name,
        to_name,
        to_email,
        message,
      },
      accessToken: Netlify.env.get("EMAILJS_ACCESS_TOKEN")
    }; 
    const emailJsApiEndpoint = `https://api.emailjs.com/api/v1.0/email/send`;

    const response = await axios.post(emailJsApiEndpoint, emailJsPayload)
     
 
    return new Response("Email sent successfully.", { status: 200 });
     
  } catch (error) {
    console.error('Error 1:', error);

    // Customize the response and status code based on the error
    return new Response("Internal server error.", { status: 500 });
  }
};