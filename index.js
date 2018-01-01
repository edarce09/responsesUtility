const ok = function succesfullOperation(res, data) {
  let response = {
    code: 'ok',
    message: 'Operation is succssfully executed',
    data: data || {}
  };
  return res.status(200).json(response)
}

const notFound = function informationNotFounded(res, data) {
  let response = {
    code: 'ERROR_NOT_FOUND',
    message: 'The requested resource could not be found but may be available again in the future',
    data: data || {}
  };
  return res.status(404).json(response);
}

const serverError = function serverError(res, data, err){
 let responce = {
   code: 'ERROR_INTERNAL_SERVER_ERROR',
   message: err || 'An error has ocurred with in the server', 
   data: data || {}
 };
 return res.status(500).json(response);
}

module.exports = {
  ok,
  notFound,
  serverError
}
