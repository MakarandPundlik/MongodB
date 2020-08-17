
const assert = require('assert');
const MarioChar = require('../models/mariochars');

//describe the tests
describe('finding the characters',()=>{
   
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

    it('finds a character from database name', (done)=>{
        MarioChar.findOne({name:'Mario'}).then((res)=>{
            assert(res.name === 'Mario');
            done();
        });       
         
     });

     it('finds a character from database by id', (done)=>{
        MarioChar.findOne({_id:char._id}).then((res)=>{
            assert(res._id.toString() === char._id.toString());     //_id are object type 
                                                                    // to compare two objects we need to convert them into string using toString()
            done();
        });       
         
     });
});
