import Joi from "joi"

module.exports.signupSchema=Joi.object({
    signup:Joi.object({
        name:Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().required(),
        role:Joi.string().valid("candidate", "admin", "recruiter").required(),
        profilepicture:Joi.string(),


        //this is for candidate only ok 
        resume:Joi.string().when("role",{
            is:"candidate",
            then:Joi.required(),//require when role is the candidate 
            otherwise:Joi.forbidden()
        }),
        skills:Joi.array().items(Joi.string()).when("role",{
            is:"candidate",
            then:Joi.required(),
            otherwise:Joi.forbidden()
        }),
        experience:Joi.string().when("role",{
            is:"candidate",
            then:Joi.required(),
            otherwise:Joi.forbidden()
        }),
          education:Joi.string().when("role",{
            is:"candidate",
            then:Joi.required(),
            otherwise:Joi.forbidden()
        }),


        // then this is for recruiter only
       companyName:Joi.string().when("role",{
            is:"recruiter",
            then:Joi.required(),
            otherwise:Joi.forbidden()
        }),
        companylogo:Joi.string().when("role",{
            is:"recruiter",
            then:Joi.required(),
            otherwise:Joi.forbidden()
        }),
        companyDescription:Joi.string().when("role",{
            is:"recruiter",
            then:Joi.required(),
            otherwise:Joi.forbidden()
        })
        

    }),
});