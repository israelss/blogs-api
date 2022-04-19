const { success, clientError } = require('../../helpers/status_codes');
const loginServices = require('../../services/login');

const login = async (req, res) => {
  const token = await loginServices.login(req.body);
  if (!token) return res.status(clientError.BAD_REQUEST).json({ message: 'Invalid fields' });
  return res.status(success.OK).json({ token });
};

module.exports = {
  login,
};