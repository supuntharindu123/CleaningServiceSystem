import JWT from "jsonwebtoken";

/**
 * Generate a JWT for the user
 * @param {string} id -  user ID
 * @param {string} username - username
 *  * @param {string} role - role
 * @returns {string} JWT token
 */
function generateToken(userId, username, role) {
  const token = JWT.sign({ userId, username, role }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
}

export default generateToken;
