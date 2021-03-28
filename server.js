const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
// const express = require('express');
//
// const PORT = process.env.port || 3001;
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
//
// const app = express();
//
// // Express middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
//
// // require('./routes/apiRoutes/notesRoutes')(app);
// // require('./routes/htmlRoutes')(app);
//
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
//
// // Default response for any other request(Not Found) Catch all
// // app.use((req, res) => {
// //   res.status(404).end();
// // });
//
// // Start server after DB connection (stays at bottom)
// app.listen(PORT, () => {
//   console.log(`API server now on port ${PORT}!`);
// });
