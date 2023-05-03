const  mdLinks  = require('./index.js');
mdLinks ('/noexiste.md').then((res) => {
    console.log(res)
})
.catch((error)=> {
    console.log(error)
});