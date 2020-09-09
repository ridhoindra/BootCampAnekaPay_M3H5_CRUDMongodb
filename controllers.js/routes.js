const express = require('express')
const router = express.Router()
const Buku = require('../models/modelBuku')

router.get('/',(req,res)=>{
    Buku.find((err,data)=>{
        if(err) throw err;

        res.render('home',{data:data})
    }).catch(err =>{
        res.render('error',{data:'Tidak bisa menampilkan data'})
    })
})

router.get('/add',(req,res)=>{
    res.render('tambah')
})

router.post('/add',(req,res)=>{
    const{nama,author,penerbit,tahun_terbit,jumlah_halaman} = req.body;
    // console.log(nama,author,penerbit,tahun_terbit,jumlah_halaman);

    const buku = new Buku({nama,author,penerbit,tahun_terbit,jumlah_halaman})

    buku.save(err=>{
        if(err){
            res.render('error',{data:'Tidak bisa tambah data'})
        }else{
            res.render('sukses',{data:'Sukses Tambah data'})
        }
    })
})

router.get('/edit/:id', (req, res, next) => {
    console.log(req.params.id);
    Buku.findOneAndUpdate({_id: req.params.id},req.body, { new: true }, (err, data)=>{
        console.log(data);
        res.render('edit', {data:data});
    })
});

router.post('/edit/:id', (req, res, next) => {
    Buku.findByIdAndUpdate({_id: req.params.id},req.body, (err)=>{
        if (err) {
            console.log(err);
            res.render('error',{data:'Tidak bisa edit data'})
        } else {
            res.render('sukses',{data:'Sukses Update data'})
        }
    })
});

router.get('/delete/:id',(req, res)=>{
    Buku.findByIdAndDelete({_id:req.params.id}, err=>{
        if(err){
            console.log(err);
            res.render('error',{data:'Tidak bisa hapus data'})
        }else{
            res.render('sukses',{data:'Sukses menghapus data'})
        }
    });
})

module.exports = router;