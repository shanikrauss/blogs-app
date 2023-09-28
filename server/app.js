// const controller = require("../server/controllers/addItem");
// const Item = require("../server/models/item");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const express = require("express");
let cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// only acceps readFileSyn and not readFile- throw error
const rawDataPosts = fs.readFileSync("demoPosts.json");
const posts = JSON.parse(rawDataPosts);

const writeToFile = (path, items) => {
  fs.writeFile(path, JSON.stringify(items), (err) => {
    if (err) {
      console.error(err);
    }
  });
};

app.get("/posts", (req, res, next) => {
  res.status(200).send(JSON.stringify(posts));
});

app.get("/tags", (req, res, next) => {
  const tags = [];
  const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };
  Object.values(posts).forEach((val) => tags.push(val.tags));

  res.status(200).send(JSON.stringify(removeDuplicates(tags.flat())));
});

app.get("/filterpoststags", (req, res, next) => {
  const tag = req.query.tag;
  const filtered = posts.dummy.filter((item) => item.tags.includes(tag));

  res.status(200).send(JSON.stringify(filtered));
});

app.get("/filterpostsauthor", (req, res, next) => {
  const author = req.query.author;
  const filtered = posts.dummy.filter(
    (item) => item.author.toLowerCase() === author.toLowerCase()
  );

  res.status(200).send(JSON.stringify(filtered));
});

app.post("/post", (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const author = req.body.author;
  const tags = req.body.tags;
  const postid = uuidv4(); // new id
  const userid = uuidv4(); // new id

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(currentDate.getDate()).padStart(2, "0");
  const currentDateTimeString = `${year}-${month}-${day}`;

  const newPost = {
    postid: postid,
    userid: userid,
    title: title,
    author: author,
    body: content,
    tags: tags,
    date: currentDateTimeString,
  };

  posts["dummy"].push(newPost);

  writeToFile("demoPosts.json", posts);

  res.status(200).send({ postid: postid });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
