import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token)
      return res.json({ success: false, message: "Unauthorized Access" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if email in token matches admin email
    if (!decoded.email || decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Unauthorized Access" });
    }

    next(); // allow access
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Unauthorized Access" });
  }
};

export default adminAuth;
