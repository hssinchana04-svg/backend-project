import mongoose, {Schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,

    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default:0
    },
    idPublished: {
      type: Boolean,
      defualt: true,
    },
    owner: {
      typ: Schema.Types.ObjectId,
      ref: 'User'
    },
  },
  {timestamps: true}
)

videoSchema.plugin(mongooseAggregatePaginat)


export const Video = mongoose.model("Video", videoSchema)