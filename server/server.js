const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
  database: 'prime_feedback',
  host: 'localhost'
});

pool.on('connect', () => {
  console.log('Yay! We are talking to our postgresql database!');
})

pool.on('error', (error) => {
  console.log('Something with postgresql really broke. It broke hard.', error);
})

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/formSubmission', (req, res) => {
  console.log('POST /survey data');
  console.log('req.body ==>', req.body);
  let sqlQuery = `
      INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments") 
        VALUES
        ($1, $2, $3, $4);
    `;
  let sqlValues = [
    req.body.feeling,
    req.body.understanding,
    req.body.support,
    req.body.comments
  ];
  pool.query(sqlQuery, sqlValues)
    .then((dbResult) => {
      console.log(dbResult);
      res.sendStatus(201);
    })
    .catch((dbError) => {
      console.log('error in POST /songs db request:');
      console.log(dbError);
    })
});

app.get('/formsubmission', (req, res) => {
  console.log('in GET /formsubmission');
  let sqlQuery = `
      SELECT * FROM "feedback";
    `;
    pool.query(sqlQuery)
    .then((dbResult) => {
    console.log('this is the result of the query to GET everything from the database', dbResult);
    res.send(dbResult.rows);
    })
    .catch((dbError) => {
      console.log('error in GET /formsubmission db request:', dbError);
      res.sendStatus(500);
    })
})


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});