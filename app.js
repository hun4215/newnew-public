const path = require('path');
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // JSON 데이터를 처리합니다.
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded form data를 처리합니다.
app.set('view engine', 'ejs');



const port = 3000; // node 서버 포트번호

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost', // MySQL 서버 주소
  user: 'root', // MySQL 사용자 아이디
  password: 'qwer12345@',
  database: 'test1', // 데이터베이스 이름
  port: 13306 // 포트번호
});

// 연결 시작
connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the DB: ' + error.stack);
    return;
  }
  console.log('Connected to the DB with ID ' + connection.threadId);
});

// 라우트 설정
app.get('/asdf', (req, res) => {
  // 쿼리 실행

  console.log('/ 경로 실행');

  connection.query('SELECT * FROM Users', (error, results) => {
    if (error) {
      console.error('An error occurred during the query: ' + error.stack);
      res.status(500).send('An error occurred');
    } else {
      res.send(results);
    }
  });
});

app.get('/users', (req, res) => {
    // 데이터베이스에서 유저 정보를 가져옵니다.
    const sql = 'SELECT * FROM Users';
    
    connection.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results)
        // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
        res.render('userList', { users: results });
    });
});

app.get('/curriculum', (req, res) => {
    // 데이터베이스에서 유저 정보를 가져옵니다.
    const sql = 'SELECT * FROM Users';
    
    connection.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results)
        // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
        res.render('curriculum', { users: results });
    });
});

app.get('/', (req, res) => {
    res.render('index', { title: 'My App', message: 'Hello, World!' });
});

app.get('/adduser', (req, res) => {
    // addUser.ejs 템플릿을 렌더링합니다.
    res.render('addUser');
});

app.post('/users', (req, res) => {
    // POST 요청의 body에서 유저 정보를 가져옵니다.
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;

    // 데이터베이스에 유저 정보를 추가합니다.
    const sql = 'INSERT INTO Users (FirstName, LastName, Email) VALUES (?, ?, ?)';
    const values = [first_name, last_name, email];
    console.log("@@@@@@@@@@@", values);

    connection.query(sql, values, (err, result) => {
        if (err) {
            throw err;
        }
        // 유저 추가가 성공적으로 완료되면, 유저 리스트 페이지로 리다이렉트합니다.
        res.redirect('/users');
    });
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});