
const assert = require('assert');
const MarioChar = require('../models/mariochars');

//describe the tests
describe('finding the characters and removing them',()=>{
   
    let char;
    
     //create tests
    beforeEach((done)=>{
         char = new MarioChar({
            name: 'Mario'
          });
      
          char.save().then(()=>{
            assert(!char.isNew);
            done();
          });
      
    });

    it('finds a character from database and removes it', (done)=>{
        MarioChar.findOneAndRemove({name:'Mario'}).then((res)=>{
            MarioChar.findOne({name:'Mario'}).then((res)=>{
                assert(res === null);
                done();
            });
            done();
        });       
         
     });

     
});
