/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
const cookies = (handler) => (req, res) => {
  //   res.cookie = (name, value, options) => cookie(res, name, value, options);
  res.cookie = (cookie) => {
    res.setHeader('Set-Cookie', cookie);
  };

  return handler(req, res);
};

export default cookies;
