const router = require("express").Router();
const { contact } = require("../models");

router.post("/api/contacts", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Score({ name, email, message });

    await contact.save();

    res.json(contact);
  } catch(error) {
    res.sendStatus(500);

    throw error;
  }
});

module.exports = router;