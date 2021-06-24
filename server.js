
const express = require ('express'); 

const app = express(); 

app.set('view engine', 'ejs'); 

app.listen(8000, () => {
  console.log("Server running at port 8000")
}); 

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('index',{title:'Calculator App'});
});

