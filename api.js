// const  mdLinks  = require('./index.js');

import { mdLinks } from './index.js';

mdLinks ().then((res) => {
    console.log(res)
})
.catch((error)=> {
    console.log('error en cli: ', error)
});

