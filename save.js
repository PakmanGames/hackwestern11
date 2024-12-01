export default function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Get the form data
        const data = req.body.data;
  
        if (!data) {
          return res.status(400).json({ error: "No data received" });
        }
  
        // Instead of saving to a file, we'll return the data directly
        return res.status(200).json({
          message: "Data received successfully",
          data: data
        });
      } catch (error) {
        // Handle any errors
        return res.status(500).json({
          error: "Internal Server Error",
          details: error.message
        });
      }
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }