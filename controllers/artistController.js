let mongoose = require('mongoose');

let artist = require('../models/artist');

let artistController = {};

artistController.list = (req, res)=>  {
    artist.find({}) 
    .skip(0)
    .exec((err, artista)=>{
        if(err){
            console.log('Error: ', err);
        }
        {
            res.render('../views/index', {
                artist: artista,
                titulo:"Mis pintores",
                year: new Date().getFullYear()
            })
        }
    })
};

module.exports = artistController;