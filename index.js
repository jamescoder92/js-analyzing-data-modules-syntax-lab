const { format } = require('date-fns');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  combinedObject.merge_date = format(new Date(), 'M/d/yyyy');

  return combinedObject;
}
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};