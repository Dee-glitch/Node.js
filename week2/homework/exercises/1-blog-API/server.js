const express = require('express')
const app = express();
const fs = require('fs');

//parsing requests as JSON
app.use(express.json());

// YOUR CODE GOES IN HERE
app.post('/blogs', function (req, res) {
  const title = req.body.title;
  const content = req.body.content;

  res.writeHead(200,{'Content-Type':'application/json'});
  fs.writeFileSync(title, content);
  res.end('ok');
})

app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  const title = req.params.title;
  if (fs.existsSync(title)) {
    const content = req.body.content;
    fs.writeFileSync(title, content);
    res.end('ok');
  }
  else {
    // Send response with error message
    res.status(404).send('This post does not exist!');
  }
})

app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  if (fs.existsSync(title)) { // Add condition here
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    // Respond with message here
    res.status(404).send('This blog post does not exist!');
})

app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  // check if post exists
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    // send response
    res.send(post);
  } else {
    res.status(404).send('This blog post does not exist!');
  }
})

app.listen(3000);