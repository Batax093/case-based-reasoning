import mongoose from "mongoose";

const diagnosisSchema = new mongoose.Schema({
    dibawah20: {
        type: Number,
        required: true,
        
    },
    diatas20: {
        type: Number,
        required: true,
        
    },
    ortuTipe1: {
        type: Number,
        required: true,
        
    },
    ortuTipe2: {
        type: Number,
        required: true,
        
    },
    obesitas: {
        type: Number,
        required: true,
        
    },
    hamil: {
        type: Number,
        required: true,
        
    },
    pascaRadiasi: {
        type: Number,
        required: true,
        
    },
    pascaKemo: {
        type: Number,
        required: true,
        
    },
    matiRasaTangaKaki: {
        type: Number,
        required: true,
        
    },
    polidipsia: {
        type: Number,
        required: true,
        
    },
    poliuris: {
        type: Number,
        required: true,
        
    },
    polifagia: {
        type: Number,
        required: true,
        
    },
    turunBB: {
        type: Number,
        required: true,
        
    },
    cpeptideRendah: {
        type: Number,
        required: true,
        
    },
    insulinTinggi: {
        type: Number,
        required: true,
        
    },
    gulaDarahTinggi: {
        type: Number,
        required: true,
        
    },
    insulinRendah: {
        type: Number,
        required: true,
        
    },
    mudahLelah: {
        type: Number,
        required: true,
        
    },
    nafasBuah: {
        type: Number,
        required: true,
        
    },
    pandanganRabun: {
        type: Number,
        required: true,
        
    },
    borok: {
        type: Number,
        required: true,
        
    },
    mualMuntahSakitPerut: {
        type: Number,
        required: true,
        
    },
    mulutKering: {
        type: Number,
        required: true,
        
    },
    gatalGatal: {
        type: Number,
        required: true,
        
    },
    riwayatPenyakitGulaInsulinProtein: {
        type: Number,
        required: true,
        
    },
    badanLemasNgantuk: {
        type: Number,
        required: true,
        
    },
    kepalaPusing: {
        type: Number,
        required: true,
        
    }
})

const Diagnosis = mongoose.model("Diagnosis", diagnosisSchema);

export default Diagnosis