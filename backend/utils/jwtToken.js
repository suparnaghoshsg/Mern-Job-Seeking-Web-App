export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const days = Number(process.env.COOKIE_EXPIRE) || 7; // default 7 days

  const options = {
    expires: new Date(Date.now() + days * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      user,
      message,
      token,
    });
};
