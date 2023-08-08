const brandRouter = require("../routes/Brand");


exports.routeConfig = async (application) => {
//   application.use(express.urlencoded({ extended: true }));
  application.use("/brand", brandRouter.router);

  console.log("routeConfig");

  return application;
};
