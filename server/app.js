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

app.get("/filterposts", (req, res, next) => {
  const tag = req.query.tag;
  const filtered = posts.dummy.filter((item) => item.tags.includes(tag));

  res.status(200).send(JSON.stringify(filtered));
});

// app.get("/children/:id", (req, res, next) => {
//   const id = req.params.id;
//   const children = mapping[id].children;
//   //   console.log("1", children)
//   const childrenTitles = children.map((childId) => {
//     return {
//       id: childId,
//       title: items[childId].title,
//       isSubmenu: items[childId].isSubmenu,
//     };
//   });

//   //   console.log("2", JSON.stringify(childrenTitles))
//   res.status(200).send(JSON.stringify(childrenTitles));
// });

// app.post("/add-new-item", controller.postAddItem);
// app.post("/item/:fatherId", (req, res, next) => {
//   const title = req.body.title;
//   const fatherId = req.params.fatherId;
//   //   console.log(req, title, fatherId)
//   const id = uuidv4(); // new id

//   items[id] = { title: title, isSubmenu: false };
//   mapping[id] = { father: fatherId, children: null }; // when add new submenu only dif is child: []
//   mapping[fatherId] = {
//     ...mapping[fatherId],
//     children: [...mapping[fatherId].children, id],
//   }; // add new child to father

//   writeToFile("items.json", items);
//   writeToFile("mapping.json", mapping);

//   res.status(200).send({ id: id });
// });

// app.post("/submenu/:fatherId", (req, res, next) => {
//   const title = req.body.title;
//   const fatherId = req.params.fatherId;
//   const id = uuidv4(); // new id
//   //   console.log(fatherId)

//   items[id] = { title: title, isSubmenu: true };
//   mapping[id] = { father: fatherId, children: [] }; // when add new submenu only dif is child: []
//   mapping[fatherId] = {
//     ...mapping[fatherId],
//     children: [...mapping[fatherId].children, id],
//   }; // add new child to father

//   writeToFile("items.json", items);
//   writeToFile("mapping.json", mapping);
//   res.status(200).send({ id: id });
// });

// app.post("/rename/:id", (req, res, next) => {
//   const title = req.body.title;
//   const id = req.params.id;

//   items[id] = { title, isSubmenu: items[id].isSubmenu };

//   writeToFile("items.json", items);
//   res.status(200).send();
// });

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
