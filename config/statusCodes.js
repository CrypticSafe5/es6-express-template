// define error codes and their responses to be used by the routes

module.exports = {
    'Bad Request': {
        status: 404,
        message: 'Bad data being passed'
    },
    'Missing Param(s)': {
        status: 404,
        message: 'Missing parameters'
    },
    default: {
        status: 500,
        message: 'Unhandled error'
    }
};
