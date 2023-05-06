const {Favorite} = require('../Db_connection');



const postFav = async (req,res)=>{
    const {name,
        gender,
        status,
        origin,
        image,
        species,
        } = req.body;

     if (!name || !origin || !status || !image || !species || !gender) {
         return res.status(401).json({ message: 'Faltan datos' });
          }

          try {
            await Favorite.create({ name, origin, status, image, species, gender });
        
            const favorites = await Favorite.findAll();
            return res.status(200).json(favorites);
          } catch (error) {
            return res.status(500).json({ message: error.message });
          }
        };
        
        module.exports = { postFav };
/*ejemplo   { "name":"Michik",
    "gender":"Famale",
    "status":"Alive",
    "origin":"Earth",
    "species":"Human",
    "episodes":[1,4]
  }*/

