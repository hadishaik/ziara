import { model, models, Schema } from "mongoose";

const OffersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  expireTime: {
    type: Date,
    required: true,
    expires: 0,
  },
});

const Offer = models.Offers || model("Offers", OffersSchema);

export default Offer;
