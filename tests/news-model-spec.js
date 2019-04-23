function testCanGetTitle() {
  var news = new News("Test", "test body", "www.example.com", "Picture", "date")
  assert.isTrue("get title of article", news.getTitle() === "Test");
}

testCanGetTitle();

function testCanGetBody() {
  var news = new News("Test", "test body", "www.example.com", "Picture", "date")
  assert.isTrue("get body of article", news.getBody() === "test body");
}

testCanGetBody();


function testCanGetURL() {
  var news = new News("Test", "test body", "www.example.com", "Picture", "date")
  assert.isTrue("get URL of article", news.getURL() === "www.example.com");
}

testCanGetURL();

function testCanGetPicture() {
  var news = new News("Test", "test body", "www.example.com", "Picture", "date")
  assert.isTrue("get picture of article", news.getThumbnail() === "Picture");
}

testCanGetPicture();

function testCanGetDate() {
  var news = new News("Test", "test body", "www.example.com", "Picture", "date")
  assert.isTrue("get date of article", news.getDate() === "date");
}

testCanGetDate();
