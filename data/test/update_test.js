
const assert = require('assert');
const MarioChar = require('../models/mariochars');

//describe the tests
describe('updating the characters',()=>{
   
    let char;
    
     //create tests
    beforeEach((done)=>{
         char = new MarioChar({
            name: 'Mario',
            weight : 50
          });
      
          char.save().then(()=>{
            
            done();
          });
      
    });

    
});
