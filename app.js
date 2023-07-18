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

app.get('/1', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('1', { users: results });
  });
});

app.get('/2', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('2', { users: results });
  });
});

app.get('/3', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('3', { users: results });
  });
});

app.get('/4', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('4', { users: results });
  });
});

app.get('/5', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('5', { users: results });
  });
});

app.get('/6', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('6', { users: results });
  });
});

app.get('/7', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('7', { users: results });
  });
});

app.get('/8', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('8', { users: results });
  });
});

app.get('/9', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('9', { users: results });
  });
});

app.get('/10', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('10', { users: results });
  });
});

app.get('/11', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('11', { users: results });
  });
});

app.get('/12', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('12', { users: results });
  });
});

app.get('/13', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('13', { users: results });
  });
});

app.get('/vedio', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('vedio', { users: results });
  });
});

app.get('/index', (req, res) => {
  // 데이터베이스에서 유저 정보를 가져옵니다.
  const sql = 'SELECT * FROM Users';
  
  connection.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      console.log(results)
      // userList.ejs 템플릿을 렌더링하고, 유저 정보를 전달합니다.
      res.render('index', { users: results });
  });
});

app.get('/', (req, res) => {
    res.render('index', { title: 'My App', message: 'Hello, World!' });
});

app.get('/adduser', (req, res) => {
    // addUser.ejs 템플릿을 렌더링합니다.
    res.render('addUser');
});

app.post('/checklist/:id', (req, res) => {
  const itemId = req.params.id;
  const checked = req.body.checked;

  const sql = 'UPDATE Checklist SET checked = ? WHERE id = ?';
  
  connection.query(sql, [checked, itemId], (err, results) => {
    if (err) {
      throw err;
    }
    res.send('체크리스트 아이템이 업데이트되었습니다.');
  });
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