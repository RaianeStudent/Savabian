const suppliers = [];
let supplierIdCounter = 1;

exports.getAllSuppliers = (limit, page) => {
  const start = (page - 1) * limit;
  return suppliers.slice(start, start + limit);
};

exports.getSupplierById = (id) => suppliers.find(supplier => supplier.id === id);

exports.createSupplier = (supplier) => {
  const newSupplier = { id: supplierIdCounter++, ...supplier };
  suppliers.push(newSupplier);
  return newSupplier;
};

exports.updateSupplier = (id, updatedSupplier) => {
  const index = suppliers.findIndex(supplier => supplier.id === id);
  if (index === -1) return null;
  suppliers[index] = { ...suppliers[index], ...updatedSupplier };
  return suppliers[index];
};

exports.deleteSupplier = (id) => {
  const index = suppliers.findIndex(supplier => supplier.id === id);
  if (index === -1) return null;
  return suppliers.splice(index, 1)[0];
};

const db = require('../config/dbConfig');

exports.getSupplierStats = async () => {
  const request = (await db).request();
  const result = await request.query(`
    SELECT 
      s.Id AS SupplierId,
      s.Name AS SupplierName,
      COUNT(p.Id) AS TotalProducts,
      COALESCE(SUM(p.Price), 0) AS TotalValue
    FROM Suppliers s
    LEFT JOIN Products p ON s.Id = p.SupplierId
    GROUP BY s.Id, s.Name
  `);
  return result.recordset;
};
