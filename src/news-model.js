(function (exports) {

  function News(title, body, url, thumbnail, date) {
    this.title = title;
    this.body = body;
    this.url = url;
    this.thumbnail = thumbnail;
    this.date = date;
  }

  News.prototype = {
    getTitle: function() {
      return this.title;
    },
    getBody: function() {
      return this.body;
    },
    getURL: function() {
      return this.url;
    },
    getThumbnail: function() {
      return this.thumbnail;
    },
    getDate: function() {
      return this.date;
    },
  }

  exports.News = News;
})(this);
