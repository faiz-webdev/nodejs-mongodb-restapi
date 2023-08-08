exports.createBrand = async (req, res) => {
  //   const brand = new Brand(req.body);
  try {
    // const doc = await brand.save();
    res.status(201).json({ doc: "success" });
  } catch (err) {
    res.status(400).json(err);
  }
};
