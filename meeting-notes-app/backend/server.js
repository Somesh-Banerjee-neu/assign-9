require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const noteRoutes = require('./routes/noteRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json()); // for parsing application/json
// console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected successfully!"))
.catch(err => console.log(err));

app.use('/api/notes', noteRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
