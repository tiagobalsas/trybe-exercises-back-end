db.clientes.aggregate([
  {
    $group: {
      _id: ["$sexo", "$endereco.uf"],
      total: {
        $count: {}
      }
    }
  },
  {
    $match: {
      "total": {$in: ["MASCULINO", "FEMININO"]}
    }
  }
]);
