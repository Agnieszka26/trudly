const path = require("path");
module.exports = {
  i18n: {
    defaultLocale: "pl",
    locales: ["pl"],
  },
  ...(typeof window === undefined
    ? { localePath: path.resolve("./public/locales") }
    : {}),
};
