const mongoose = require("mongoose");

const bukuSchema = mongoose.Schema({
    nama: { type: String },
    author: { type: String },
    penerbit: { type: String },
    tahun_terbit: { type: Number },
    jumlah_halaman: { type: Number }
  });

module.exports = mongoose.model('buku',bukuSchema)