function testCanGetTitle() {
  var article = new Article({title: "Test", url: "www.example.com", thumbnail: "Picture"});
  assert.isTrue("get title of article", article.getTitle() === "Test");
}

testCanGetTitle();

function testCanGetURL() {
  var article = new Article({title: "Test", url: "www.example.com", thumbnail: "Picture"});
  assert.isTrue("get URL of article", article.getURL() === "www.example.com");
}

testCanGetURL();

function testCanGetPicture() {
  var article = new Article({title: "Test", url: "www.example.com", thumbnail: "Picture"});
  assert.isTrue("get picture of article", article.getThumbnail() === "Picture");
}

testCanGetURL();
