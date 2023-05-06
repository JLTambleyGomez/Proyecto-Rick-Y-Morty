const {Favorite} = require('../Db_connection');

const DeleteFavById= async (id)=>{
    try {
    const favorites = await Favorite.findByPk(id)
await favorites.destroy();
return favorites;

} catch (error) {
    return res.status(500).json({ message: error.message });
}
}

module.exports = DeleteFavById 