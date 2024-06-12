import mongoose from "mongoose";

const tipeKhususSchema = new mongoose.Schema({
    dibawah20: {
        type: Number,
        required: true,
        default: 0
    },
    diatas20: {
        type: Number,
        required: true,
        default: 0
    },
    ortuTipe1: {
        type: Number,
        required: true,
        default: 0
    },
    ortuTipe2: {
        type: Number,
        required: true,
        default: 0
    },
    obesitas: {
        type: Number,
        required: true,
        default: 0
    },
    hamil: {
        type: Number,
        required: true,
        default: 0
    },
    pascaRadiasi: {
        type: Number,
        required: true,
        default: 1
    },
    pascaKemo: {
        type: Number,
        required: true,
        default: 1
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
        default: 0
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
        default: 1
    },
    nafasBuah: {
        type: Number,
        required: true,
        default: 1
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
        default: 1
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

const TipeKhusus = mongoose.model("TipeKhusus", tipeKhususSchema);

export default TipeKhusus

// const newTipeKhusus = new TipeKhusus({
//     dibawah20: 0,
//     diatas20: 0,
//     ortuTipe1: 0,
//     ortuTipe2: 0,
//     obesitas: 0,
//     hamil: 0,
//     pascaRadiasi: 1,
//     pascaKemo: 1,
//     matiRasaTangaKaki: 1,
//     polidipsia: 1,
//     poliuris: 1,
//     polifagia: 1,
//     turunBB: 0,
//     cpeptideRendah: 0,
//     insulinTinggi: 0,
//     gulaDarahTinggi: 1,
//     insulinRendah: 1,
//     mudahLelah: 1,
//     nafasBuah: 1,
//     pandanganRabun: 1,
//     borok: 1,
//     mualMuntahSakitPerut: 1,
//     mulutKering: 1,
//     gatalGatal: 1,
//     riwayatPenyakitGulaInsulinProtein: 1,
//     badanLemasNgantuk: 1,
//     kepalaPusing: 1
// })

// newTipeKhusus.save()