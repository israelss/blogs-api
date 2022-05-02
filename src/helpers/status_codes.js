const success = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
};

const clientError = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

const serverError = {
  INTERNAL_ERROR: 500,
};

module.exports = {
  clientError,
  serverError,
  success,
};