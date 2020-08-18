const mongoose = require('mongoose');
const assert = require('assert');
const AuthorChar = require('../models/authormodel');

describe('it consists of nested schema',(done)=>{
    it('creates nested schema and saves to database',()=>{
        let apj = new AuthorChar({
            name:'APJ Abdul Kalam',
            age:80,
            books:[{title:'Wings of fire',pages:250}]
        });

        apj.save().then((res)=>{
            assert(res.books.length === 1);
            done();
        })
    })
});
