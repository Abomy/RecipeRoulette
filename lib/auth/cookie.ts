/**
 * This sets `cookie` on `res` object
 */
const cookie = (res, name, value, options = {}) => {
  //   const stringValue =
  //     typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
  //   if ("maxAge" in options) {
  //     options.expires = new Date(Date.now() + options.maxAge);
  //     options.maxAge /= 1000;
  //   }
  //   res.setHeader("Set-Cookie", serialize(name, String(stringValue), options));
};

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
const cookies = handler => (req, res) => {
  //   res.cookie = (name, value, options) => cookie(res, name, value, options);
  res.cookie = cookie => {
    res.setHeader("Set-Cookie", cookie);
  };

  return handler(req, res);
};

export default cookies;
