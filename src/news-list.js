(function(exports) {
  function NewsList() {
    this.newsList = [];
    this.getNews();
  }

  NewsList.prototype = {
    storeNews: function(articles) {
      var self = this;
      articles.forEach( function(article) {
        var news = new News(article.webTitle, article.fields.body, article.webUrl, article.fields.thumbnail, article.webPublicationDate);
        self.newsList.push(news);
      });
    },
    getNews: function() {
      var self = this;
      var request = new XMLHttpRequest();
      request.open('GET', 'https://content.guardianapis.com/search?q=politics&show-fields=headline,thumbnail,body&show-refinements=all&order-by=newest&api-key=d9bd770e-de36-486d-9653-a6dde3489d85', true);
      request.onload = function () {
        var data = JSON.parse(request.response);
        self.storeNews(data.response.results);
      }
      request.send();
    },
  }

  exports.NewsList = NewsList;
})(this);

var newslist = new NewsList;
console.log(newslist);
