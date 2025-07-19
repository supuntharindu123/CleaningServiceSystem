import JWT from "jsonwebtoken";

/**
 * Generate a JWT for the user
 * @param {string} id -  user ID
 * @param {string} username - username
 * @returns {string} JWT token
 */
function generateToken(userId, username) {
  const token = JWT.sign({ userId, username }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
}

export default generateToken;
