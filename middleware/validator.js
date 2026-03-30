import {body} from "express-validator"


export const validateUser=[
    body("name")
    .notEmpty().withMessage("Name is required"),

  body("email")
    .isEmail().withMessage("Valid email is required"),

  body("password")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),

  body("role")
    .isIn(["candidate", "recruiter", "admin"])
    .withMessage("Invalid role")
] 

export const validateJobs=[
  body("title").notEmpty().withMessage("Title was required"),
 
  body("description")
  .isLength({min:30}).withMessage("description must be long "),

   body("jobType")
    .isIn(["full-time", "part-time", "remote" ,"internship"])
    .withMessage("Invalid job type"),

  body("salary")
  .notEmpty(),

  body("experience").notEmpty(),

  body("isOpen")
    .optional() // kyunki default hai
    .isBoolean().withMessage("isOpen must be true or false") .toBoolean()
]