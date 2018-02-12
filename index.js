/**
 * ok response
 * @constructor
 * @param {Object} res - Response to return
 * @param {Object} data - Data or Document to return
 */
const ok = function succesfullOperation(res, data) {
  let response = {
    code: 'ok',
    message: 'Operation is succssfully executed',
    data: data || {}
  };
  return res.status(200).json(response)
}

const created = function documentSuccessfullyCreated(res, data){
  let response = {
    code:'created',
    message: 'The new resource has been created successfully',
    data: data||{}
  };
  return res.status(201).json(response);
}

const badRequest = function(res, param){
 let response = {
   code: 'BAD_REQUEST',
   message: 'Missing '+param+' parameter'
 };
 return res.status(400).json(response);
}

const notFound = function informationNotFounded(res, data) {
  let response = {
    code: 'ERROR_NOT_FOUND',
    message: 'The requested resource could not be found but may be available again in the future',
    data: data || {}
  };
  return res.status(404).json(response);
}

const gone = function permanentlyRemoved(res, data){
  let response = {
    code: 'GONE',
    message: 'The access to the target is no longer avaible',
    data: data || {} 
    };
  return res.status(410).json(response);
}

const duplicated = function permanentlyRemoved(res, err){
  let dupParam = err.errmsg.split('"');
  let response = {
    code: "I'MA TEAPOD",
    message: 'Duplicated parameter: '+dupParam[1],
    };
  return res.status(418).json(response);
}

const serverError = function(res, data, err){
 let response = {
   code: 'ERROR_INTERNAL_SERVER_ERROR',
   message: err || 'An error has ocurred with in the server', 
   data: data || {},
   err: err
 };
 return res.status(500).json(response);
}


module.exports = {
  ok,
  created,
  badRequest,
  notFound,
  gone,
  duplicated,
  serverError
}
