const { Brand } = require("../model/Brand");
const isEmpty = require("lodash.isempty");

exports.createBrand = async (req, res) => {
  const brand = new Brand(req.body);
  try {
    const { label, value } = req.body;
    let getBrand = await Brand.findOne({
      $or: [{ label: label }, { value: value }],
    });

    if (getBrand) {
      res.status(400).json({ message: "Brand already taken", data: {} });
    } else {
      const doc = await brand.save();
      res.status(201).json({ data: doc, message: "brand created" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getBrand = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.status(201).json({ message: "brand found", brands });
  } catch (err) {
    res.status(400).json(err);
  }
};
