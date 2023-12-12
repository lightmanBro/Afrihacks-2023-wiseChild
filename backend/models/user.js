const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: [true, "Please provide a name"] },
    email: {
      type: String,
      require: [true, "An email is required"],
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email");
        }
      },
    },
    password: {
      type: String,
      require: [true, "Password is required"],
      trim: true,
      validate(value) {
        if (value.length < 6 || value.tolwerCase().includes("password")) {
          throw new Error(
            "Password must not contain the wor₫password or password is too short"
          );
        }
      },
    },
    role:{type:String,enum:['student','teacher']},
    courses: [{ type: mongoose.Schema.ObjectId, ref: "Course" }],
    account: { type: mongoose.Schema.ObjectId, ref: "Account" },
    tokens: [{ token: { type: String, require: true } }],
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thistokensecretkey");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// this function is attached to the user model itself because its a static method;
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

// Method to be called when a password change happens
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    //    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
