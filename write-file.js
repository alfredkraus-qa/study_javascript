const fs = require('fs')

fs.writeFile('message.txt', "Oi Família!", (err) => {
  if (err) {
        throw err; 
    }   else    {
        console.log('The file has been saved!')
    }
  })

  

  