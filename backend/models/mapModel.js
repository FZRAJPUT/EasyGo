import mongoose from "mongoose";

const mapSchema = new mongoose.Schema({
    city: { type: String, required: true },
    key: { type: String, required: true },
    secret: { type: String, required: true },
    mapId: { type: String, required: true }
})

const mapModel = mongoose.models.maps || mongoose.model("maps", mapSchema)

export default mapModel