import db from "../config/database.js";

export const listarDestinos = (req, res) => {
  const sql = `
        SELECT *
        FROM destino_turistico
    `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        erro: "Erro ao buscar destinos",
      });
    }

    res.json(results);
  });
};
