var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var profileRouter = require("./routes/profile");
var ordersRouter = require("./routes/orders");
var homeRouter = require("./routes/home");
var cartRouter = require("./routes/cart");
var paymentRouter = require("./routes/payment");
var productsRouter = require("./routes/products");
var authRouter = require("./routes/auth");
var tempRouter = require("./routes/temp");
var collaborativeFilteringRouter = require("./routes/collaborativeFiltering");
var CF_tempRouter = require("./routes/CF_temp");
var timeTemp1Router = require("./routes/timeTemp1");
var timeTemp2Router = require("./routes/timeTemp2");
var apriorRouter = require("./routes/aprior");
//client
var inventoryRouter = require("./routes/inventory");
var contactsRouter = require("./routes/contacts");
var stockRouter = require("./routes/stock");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

mongoose.connect(
  "mongodb://localhost/startup",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);
mongoose.Promise = global.Promise;

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

//If you're using express > 4.16, you can use express.json() and express.urlencoded()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/profile", profileRouter);
app.use("/orders", ordersRouter);
app.use("/home", homeRouter);
app.use("/cart", cartRouter);
app.use("/payment", paymentRouter);
app.use("/products", productsRouter);
app.use("/auth", authRouter);
app.use("/temp", tempRouter);
app.use("/collaborativeFiltering", collaborativeFilteringRouter);
app.use("/CF_temp", CF_tempRouter);
app.use("/timeTemp1", timeTemp1Router);
app.use("/timeTemp2", timeTemp2Router);
app.use("/aprior", apriorRouter);

//client
app.use("/inventory", inventoryRouter);
app.use("/contacts", contactsRouter);
app.use("/stock", stockRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.listen(process.env.port || 4000, function () {
//   console.log("listening for requests");
// });

module.exports = app;
