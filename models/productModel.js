const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema({
  ref: {
    type: Number,
    required: [true, 'Product must have a reference number.'],
  },
  id: {
    type: String,
    required: [true, 'Product must have a id.'],
  },
  type: {
    type: String,
    required: [true, 'Product must have a type.'],
  },
  brand: {
    type: String,
    required: [true, 'Product must have a brand'],
  },
  name: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Product must have a name.'],
  },
  slug: String,
  price: {
    type: Number,
    required: [true, 'Product must have a price.'],
  },
  realPrice: {
    type: Number,
    required: [true, 'Product must have a realPrice.'],
  },
  bannerImage: String,
  images: {
    type: [String],
    required: [true, 'Product must have atlease one image.'],
  },
  specs: {
    processor: String,
    diskType: String,
    diskSize: String,
    ram: String,
  },
  highlights: {
    type: [String],
    required: [true, 'Product must have a highlights'],
  },
  ratings: [
    {
      stars: {
        type: Number,
        required: [true, 'Rating must have a star'],
        min: [1, 'Rating Average should above 1'],
        max: [5, 'Ratings Average should below 5'],
        set: (val) => Math.round(val * 10) / 10,
      },
      title: {
        type: String,
        required: [true, 'Rating must have a title'],
      },
      description: {
        type: String,
        required: [true, 'Rating must have a description'],
      },
      userName: {
        type: String,
        required: [true, 'Rating must have a userName'],
      },
      daysBefore: {
        type: String,
        required: [true, 'Rating must have a daysBefore'],
      },
    },
  ],
});

productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

productSchema.pre(/^find/, function (next) {
  this.select('-_id');
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
