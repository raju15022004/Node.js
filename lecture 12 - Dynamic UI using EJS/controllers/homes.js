 const registeredHomes = []; // Data store

exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home",
    currentPage: "addHome"
  });
};

exports.postAddHome = (req, res, next) => {
  console.log("Home Registered:", req.body);

  registeredHomes.push({
    houseName: req.body.houseName
  });

  res.redirect("/homes"); // ✅ After saving, redirect to list page
};

exports.getHomes = (req, res, next) => {
  res.render("home", {
    pageTitle: "Registered Homes",
    currentPage: "homes",
    registeredHomes: registeredHomes  // ✅ Send list to EJS
  });
};




