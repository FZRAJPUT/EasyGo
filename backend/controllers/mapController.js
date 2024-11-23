import mapModel from "../models/mapModel.js";


// add maps
const addMaps = async (req, res) => {
    const { city, key, secret, mapId } = req.body;
    try {
        const exist = await mapModel.findOne({ mapId })
        if (exist) {
            return res.json({ success: false, message: "Map_id already exist.." })
        }

        const cityExist = await mapModel.findOne({ city })
        if (cityExist) {
            return res.json({ success: false, message: "city already exist.." })
        }
        const newMap = new mapModel({
            city: city,
            key: key,
            secret: secret,
            mapId: mapId
        })

        await newMap.save();
        
        return res.json({ success: true, message: "Map uploaded" })
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "map not uploaded" })
    }
}

// fetch maps from db
const fetchAllMaps = async (req, res) => {
    const { city } = req.query;
    try {
        const maps = await mapModel.find({ city: city });
        if (maps.length === 0) {
            return res.json({ success: false, message: "City not available" });
        }
        res.json({ success: true, maps });
    } catch (err) {
        console.error('Error fetching maps:', err);
        res.status(500).json({ success: false, message: "Failed to fetch maps" });
    }
};



export { addMaps, fetchAllMaps }