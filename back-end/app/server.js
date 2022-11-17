const express = require('express') ;
const app = express() ;
const port = 3608 ;
const rootRouter = require('./router/root.router') ;

app.use(express.json()) ;

app.use(rootRouter) ; 


// "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) ;