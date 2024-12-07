const users = [{ id: 1, username: 'admin', password: 'admin123', role: 'admin' }];
let userIdCounter = 2;

exports.getAllUsers = (limit, page) => {
  const start = (page - 1) * limit;
  return users.slice(start, start + limit);
};

exports.getUserById = (id) => users.find(user => user.id === id);

exports.createUser = (user) => {
  const newUser = { id: userIdCounter++, ...user, role: 'user' };
  users.push(newUser);
  return newUser;
};

exports.createAdmin = (user) => {
  const newAdmin = { id: userIdCounter++, ...user, role: 'admin' };
  users.push(newAdmin);
  return newAdmin;
};

exports.updateUser = (id, updatedData) => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;

  users[index] = { ...users[index], ...updatedData };
  return users[index];
};

exports.deleteUser = (id) => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  return users.splice(index, 1)[0];
};

exports.validateCredentials = (username, password) => {
  return users.find(user => user.username === username && user.password === password);
};

exports.installDefaultAdmin = () => {
  if (!users.find(user => user.username === 'admin')) {
    const admin = { id: userIdCounter++, username: 'admin', password: 'admin123', role: 'admin' };
    users.push(admin);
    return admin;
  }
  return null;
};