const contactService = require('../services/contactService');

exports.submitContactForm = (req, res) => {
  const form = contactService.submitContactForm(req.body);
  res.status(201).json(form);
};

exports.getAllMessages = (req, res) => {
  const messages = contactService.getAllMessages();
  res.status(200).json(messages);
};