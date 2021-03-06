class APIFeatures {
  constructor(model, queryString) {
    this.model = model;
    this.queryString = queryString;
  }

  filter() {
    if (this.queryString) {
      const queryObj = { ...this.queryString };
      const excludedFields = ['sort', 'fields', 'limit'];
      excludedFields.forEach((el) => delete queryObj[el]);

      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(
        /\b(gt|gte|lt|lte)\b/g,
        (match) => `$${match}`
      );

      this.model = this.model.find(JSON.parse(queryStr));
      return this;
    }
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort;
      if (sortBy === 'des') {
        this.model = this.model.sort({ price: -1 });
      } else if (sortBy === 'asc') {
        this.model = this.model.sort({ price: 1 });
      } else {
        return null;
      }
    } else {
      this.model = this.model.sort({ price: 1 });
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const limitedFields = this.queryString.fields.split(',').join(' ');
      this.model = this.model.select(limitedFields);
    }

    return this;
  }

  limitResults() {
    if (this.queryString.limit) {
      this.model = this.model.limit(this.queryString.limit * 1);
      return this;
    }
    return this;
  }
}

module.exports = APIFeatures;
