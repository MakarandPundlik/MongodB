const mongoose = require('mongoose');


//global promise object overriding
mongoose.Promise = global.Promise;

//connect to mongodb server
//using mocha hook which runs before tests
before((done)=>{
    mongoose.connect('mongodb://127.0.0.1:27017/testaroo',{
    useNewUrlParser:true,
    useUnifiedTopology: true
    });

    mongoose.connection.once('open',()=>{
    console.log('Connected to the database.');
    done();
    }).on('error',(error)=>{
    console.log('Connection error:', error);
    });

});

//drop the collection before every test
beforeEach((done)=>{
    //drop the collection
    mongoose.connection.collections.mariochars.drop(()=>{
        done();
    })
})
