class AppError extends Error{
    constructor(
        name,
        message,
        explanation,
        statusCode
    ){
        super();
        this.name=name;
        this.message=message;
        this.explanation=explanation;
        this.successCode=statusCode;
    }
} 

module.exports=AppError;