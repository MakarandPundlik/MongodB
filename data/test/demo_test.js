
const assert = require('assert');
const MarioChar = require('../models/mariochars');

//describe the tests
describe('saving to database',()=>{
    //create tests
    it('Saves a record to the database', (done)=>{

        const char = new MarioChar({
          name: 'Mario'
        });
    
        char.save().then(()=>{
          assert(!char.isNew);
          done();
        });
    
      });
});
