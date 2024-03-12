const {StatusCodes} = require("http-status-codes");
class ValidationError extends Error{
    constructor(error){
        super();
        this.name="ValidationError",
        this.explanation = [];
        error.errors.forEach((err)=>{
            this.explanation.push(err.message);
        });
        this.message="Not able to validate the data sent in the request";
        this.successCode=StatusCodes.BAD_REQUEST;
    }
}

module.exports=ValidationError;