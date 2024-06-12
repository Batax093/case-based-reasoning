import mongoose from "mongoose";

const tipe2Schema = new mongoose.Schema({
    dibawah20: {
        type: Number,
        required: true,
        default: 0
    },
    diatas20: {
        type: Number,
        required: true,
        default: 1
    },
    ortuTipe1: {
        type: Number,
        required: true,
        default: 0
    },
    ortuTipe2: {
        type: Number,
        required: true,
        default: 1
    },
    obesitas: {
        type: Number,
        required: true,
        default: 1
    },
    hamil: {
        type: Number,
        required: true,
        default: 0
    },
    pascaRadiasi: {
        type: Number,
        required: true,
        default: 0
    },
    pascaKemo: {
        type: Number,
        required: true,
        default: 0
    },
    matiRasaTangaKaki: {
        type: Number,
        required: true,
        default: 1
    },
    polidipsia: {
        type: Number,
        required: true,
        default: 1
    },
    poliuris: {
        type: Number,
        required: true,
        default: 1
    },
    polifagia: {
        type: Number,
        required: true,
        default: 1
    },
    turunBB: {
        type: Number,
        required: true,
        default: 1
    },
    cpeptideRendah: {
        type: Number,
        required: true,
        default: 0
    },
    insulinTinggi: {
        type: Number,
        required: true,
        default: 0
    },
    gulaDarahTinggi: {
        type: Number,
        required: true,
        default: 1
    },
    insulinRendah: {
        type: Number,
        required: true,
        default: 1
    },
    mudahLelah: {
        type: Number,
        required: true,
        default: 0
    },
    nafasBuah: {
        type: Number,
        required: true,
        default: 0
    },
    pandanganRabun: {
        type: Number,
        required: true,
        default: 1
    },
    borok: {
        type: Number,
        required: true,
        default: 1
    },
    mualMuntahSakitPerut: {
        type: Number,
        required: true,
        default: 1
    },
    mulutKering: {
        type: Number,
        required: true,
        default: 1
    },
    gatalGatal: {
        type: Number,
        required: true,
        default: 1
    },
    riwayatPenyakitGulaInsulinProtein: {
        type: Number,
        required: true,
        default: 0
    },
    badanLemasNgantuk: {
        type: Number,
        required: true,
        default: 1
    },
    kepalaPusing: {
        type: Number,
        required: true,
        default: 1
    }
})

const Tipe2 = mongoose.model("Tipe2", tipe2Schema);

export default Tipe2

// const newTipe2 = new Tipe2({
//     dibawah20: 0,
//     diatas20: 1,
//     ortuTipe1: 0,
//     ortuTipe2: 1,
//     obesitas: 1,
//     hamil: 0,
//     pascaRadiasi: 0,
//     pascaKemo: 0,
//     matiRasaTangaKaki: 1,
//     polidipsia: 1,
//     poliuris: 1,
//     polifagia: 1,
//     turunBB: 1,
//     cpeptideRendah: 0,
//     insulinTinggi: 0,
//     gulaDarahTinggi: 1,
//     insulinRendah: 1,
//     mudahLelah: 0,
//     nafasBuah: 0,
//     pandanganRabun: 1,
//     borok: 1,
//     mualMuntahSakitPerut: 1,
//     mulutKering: 1,
//     gatalGatal: 1,
//     riwayatPenyakitGulaInsulinProtein: 0,
//     badanLemasNgantuk: 1,
//     kepalaPusing: 1
// }) 

// newTipe2.save()