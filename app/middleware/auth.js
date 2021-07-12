const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require("../config/config");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, TOKEN_SECRET);
    const userId = decodedToken.userId;
    req.body.userId = userId;
    next();
    
  } catch (error) {
    res.status(401).json({ error: error | "Request not authentified" });
  }
};

