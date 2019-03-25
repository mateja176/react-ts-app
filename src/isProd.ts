export default () => {
  switch (process.env.NODE_ENV) {
    case "production":
      return true;
    default:
      return false;
  }
};
