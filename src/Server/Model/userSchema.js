const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
         type: String,
         required: true
    },

    email: {
        type: String,
        required: true
   },

   password: {
    type: String,
    required: true
   },

   cpassword: {
    type: String,
    required: true
  },

    pnumber: {
    type: Number,
    required: true
  },

  address: {
    type: String,
    required: true
},

  appointments: [
    {
      name: {
        type: String,
        required: true
   },

   email: {
       type: String,
       required: true
  },

   pnumber: {
   type: Number,
   required: true
 },

  gender: {
    type: String,
    required: true
  },

  symptoms: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true

  },

  time: {
    type:String,
    required:true
  }
    }
  ],
tokens: [
    {
      token: {
        type : String,
        required : true
      }
    }
]
})


//we are hashing password

userSchema.pre('save',async function(next) {
  console.log("Chal rha hai");
  if(this.isModified('password'))
  {
    this.password =await bcrypt.hash(this.password, 12);
    this.cpassword =await bcrypt.hash(this.cpassword, 12);
    
  }

  next();


});

//we are generating token

userSchema.methods.generateAuthToken = async function() {
  
  try {

    let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token:token });
    await this.save();
    return token;
    


  } catch(err) {

        console.log(err);
  }
}

//storing appointment details
userSchema.methods.addAppointment = async function(name,email,pnumber,gender,symptoms,date,time) {

  try {
        this.appointments = this.appointments.concat({name,email,pnumber,gender,symptoms,date,time});
        await this.save();
        return this.appointments;
  }catch(error) {
    console.log(error);
  }

}
//collection creation
const User = mongoose.model('REGISTRATION',userSchema);

module.exports = User;