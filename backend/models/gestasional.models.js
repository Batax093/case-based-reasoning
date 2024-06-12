import mongoose from "mongoose";

const gestasionalSchema = new mongoose.Schema({
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
        default: 1
    },
    hamil: {
        type: Number,
        required: true,
        default: 1
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
        default: 0
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

const Gestasional = mongoose.model("Gestasional", gestasionalSchema);

export default Gestasional

// const newGestasional = new Gestasional({
//     dibawah20: 0,
//     diatas20: 0,
//     ortuTipe1: 0,
//     ortuTipe2: 0,
//     obesitas: 1,
//     hamil: 1,
//     pascaRadiasi: 0,
//     pascaKemo: 0,
//     matiRasaTangaKaki: 1,
//     polidipsia: 1,
//     poliuris: 1,
//     polifagia: 1,
//     turunBB: 0,
//     cpeptideRendah: 0,
//     insulinTinggi: 0,
//     gulaDarahTinggi: 1,
//     insulinRendah: 1,
//     mudahLelah: 0,
//     nafasBuah: 0,
//     pandanganRabun: 0,
//     borok: 1,
//     mualMuntahSakitPerut: 1,
//     mulutKering: 1,
//     gatalGatal: 1,
//     riwayatPenyakitGulaInsulinProtein: 0,
//     badanLemasNgantuk: 1,
//     kepalaPusing: 1
// })

// newGestasional.save()