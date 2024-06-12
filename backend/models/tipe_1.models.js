import mongoose from "mongoose";

const tipe1Schema = new mongoose.Schema({
    dibawah20: {
        type: Number,
        required: true,
        default: 1
    },
    diatas20: {
        type: Number,
        required: true,
        default: 0
    },
    ortuTipe1: {
        type: Number,
        required: true,
        default: 1
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
        default: 0
    },
    polifagia: {
        type: Number,
        required: true,
        default: 0
    },
    turunBB: {
        type: Number,
        required: true,
        default: 1
    },
    cpeptideRendah: {
        type: Number,
        required: true,
        default: 1
    },
    insulinTinggi: {
        type: Number,
        required: true,
        default: 1
    },
    gulaDarahTinggi: {
        type: Number,
        required: true,
        default: 1
    },
    insulinRendah: {
        type: Number,
        required: true,
        default: 0
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
        default: 0
    },
    borok: {
        type: Number,
        required: true,
        default: 0
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

const Tipe1 = mongoose.model("Tipe1", tipe1Schema);

export default Tipe1

/* const newTipe1 = new Tipe1({
    dibawah20: 1,
    diatas20: 0,
    ortuTipe1: 1,
    ortuTipe2: 0,
    obesitas: 0,
    hamil: 0,
    pascaRadiasi: 0,
    pascaKemo: 0,
    matiRasaTangaKaki: 1,
    polidipsia: 1,
    poliuris: 0,
    polifagia: 0,
    turunBB: 1,
    cpeptideRendah: 1,
    insulinTinggi: 1,
    gulaDarahTinggi: 1,
    insulinRendah: 0,
    mudahLelah: 1,
    nafasBuah: 1,
    pandanganRabun: 0,
    borok: 0,
    mualMuntahSakitPerut: 1,
    mulutKering: 1,
    gatalGatal: 1,
    riwayatPenyakitGulaInsulinProtein: 0,
    badanLemasNgantuk: 1,
    kepalaPusing: 1
})

newTipe1.save() */