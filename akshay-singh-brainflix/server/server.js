const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || process.argv[2] || 8081;
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// const { default: VideoDetails } = require('../client/src/components/Video-details/Video-details');
// const router = express.Router();

app.use(express.json());
app.use(cors());

app.get('/videos', (req, res) => {
    fs.readFile('./data/video-details.json', 'utf8', (err, video) => {
        if (err) {
            console.log(err);
            res.json({ message: 'error getting videos'})
        } else {
            res.json(JSON.parse(video));
        }
    })
});

app.get('/videos/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/video-details.json', 'utf8', (err, video) => {
        if (err) {
            console.error(err);
            res.json({ message: 'No video with that id exists' });
        }

        const videoDetail = JSON.parse(video);
        const foundVideoDetails = videoDetail.find((video) => video.id === req.params.id);
        if (!foundVideoDetails){
            res.json({ message: 'No video with that id exists' });
        } else {
            res.json(foundVideoDetails);
        }
    })
});

app.post('videos/', (req, res) => {
    const { image } = req.body;
    fs.readFile('./data/video-details.json', 'utf8', (err, video) => {
        if (err) {
            console.error(err);
            res.json({ message: 'No video with that id exists' });
        } else {
            video.push({
                id: uuidv4(),
                image:'./Images/Upload-video-preview.jpg'
            });
            res.json(video);
        }
    })
    
});

app.listen(port, () => console.log(`Listening on ${port}`));
