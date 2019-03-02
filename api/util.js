
const getUserId = (headers) => {
  return headers.app_user_id;
}

const getUserName = (headers) => {
  return headers.app_user_name;
}

const getResponseHeader = () => {
  return {
    'Access-Control-Allow-Origin': '*'
  }
}

module.exports = {
  getResponseHeader,
  getUserId,
  getUserName
}
