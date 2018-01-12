import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import posts from '../src/assets/posts.json';
import images from '../src/assets/images.json';
import actors from '../src/assets/actors.json';
import { serverPort } from './config.json';

// Initialization of express application
const app = express();


// Using bodyParser middleware
app.use(bodyParser.json());

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/posts', (req, res) => {
	res.send(posts);
});

app.get('/images', (req, res) => {
	res.send(images);
});

app.get('/actors', (req, res) => {
	res.send(actors);
});

app.listen(serverPort, () => {
	console.log(`Server is up and running on port ${serverPort}`);
});
