const { Brand } = require("../model/Brand");

exports.createBrand = async (req, res) => {
  const brand = new Brand(req.body);
  try {
    let getBrand = await Brand.find({});
    if (getBrand) {
      res.status(400).json({ message: "Brand already taken", data: {} });
    } else {
      const doc = await brand.save();
      res.status(201).json({ data: brand });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getBrand = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.status(201).json({ brands });
  } catch (err) {
    res.status(400).json(err);
  }
};
