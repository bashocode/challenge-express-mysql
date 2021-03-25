const heroDB = require('../db/hero');

class HeroController {
  async get(req, res) {
    try {
      let query = 'SELECT * FROM Charas';
      let data = await heroDB.getHero(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async post(req, res) {
    try {
      let { name, element } = req.body;
      let query = `
      INSERT INTO Charas (name, element) 
      VALUES ('${name}', '${element}')`;
      let data = await heroDB.postHero(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async put(req, res) {
    try {
      let { name, element } = req.body;
      let query = `
      UPDATE Charas (name, element) 
      SET name = '${name}', element = '${element}'
      WHERE name = '${name}'
      )`;
      let data = await heroDB.putHero(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async deleteHero(req, res) {
    try {
      const {name, element} = req.body;
      const query = `
      DELETE FROM Charas WHERE name= '${name}'`;
      const data = await heroDB.deleteHero(query)
      res.status(200).json(data)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

module.exports = new HeroController;
