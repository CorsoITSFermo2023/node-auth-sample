const { smartSelect } = require("../db-smart");

async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    // Validate the token against the session table
    const [session] = await smartSelect("token", { token });

    if (session && session.exp > Date.now()) {
      // Token is valid, attach the session to the request object
      req.session = session;
      next();
    } else {
      res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    res.status(401).json({ error: 'Missing or invalid authorization header' });
  }
}

module.exports = authMiddleware;
