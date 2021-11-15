const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || process.argv[2] || 8081;
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

app.use(express.json());
app.use(cors());

app.get("/videos", (req, res) => {
  fs.readFile("./data/video-details.json", "utf8", (err, video) => {
    if (err) {
      console.log(err);
      res.json({ message: "error getting videos" });
    } else {
      res.json(JSON.parse(video));
    }
  });
});

app.get("/videos/:id", (req, res) => {
  console.log(req.params.id);
  fs.readFile("./data/video-details.json", "utf8", (err, video) => {
    if (err) {
      console.error(err);
      res.json({ message: "No video with that id exists" });
    }

    const videoDetail = JSON.parse(video);
    const foundVideoDetails = videoDetail.find(
      (video) => video.id === req.params.id
    );
    if (!foundVideoDetails) {
      res.json({ message: "No video with that id exists" });
    } else {
      res.json(foundVideoDetails);
    }
  });
});

app.post("/videos/", (req, res) => {
  console.log(req.body);
  const { image } = req.body;
  fs.readFile("./data/video-details.json", "utf8", (err, video) => {
    if (err) {
      console.error(err);
      res.json({ message: "No video with that id exists" });
    } else {
      const vidArr = JSON.parse(video);
      vidArr.push({
        channel: "lorem Ipsum",
        comment: [],
        description: req.body.description,
        id: uuidv4(),
        image: "./Images/Upload-video-preview.jpg",
        likes: "5678",
        timestamp: Date.now(),
        title: req.body.title,
        video: "./Images/Upload-video-preview.jpg",
        views: "98,432",
      });
      fs.writeFileSync("./data/video-details.json", JSON.stringify(vidArr));
      res.json(vidArr);
    }
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));
