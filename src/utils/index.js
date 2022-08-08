const { format } = require("date-fns");

const formatTime = (date) => {
  return format(date, "dd-MM-yyyy HH:mm");
};

module.exports = { formatTime };
