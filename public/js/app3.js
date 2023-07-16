const express = require('express');
const app3 = express();

// 서버 루트 디렉토리에 index.html 파일을 제공하는 코드
app3.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 서버를 시작하는 코드
app3.listen(3000, () => {
  console.log('서버가 시작되었습니다. 포트: 3000');
});
