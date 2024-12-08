const contacts = [];

exports.submitContactForm = (form) => {
  contacts.push(form);
  return form;
};

exports.getAllMessages = () => contacts;