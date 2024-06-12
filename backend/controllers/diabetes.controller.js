import Diabetes from "../models/diabetes.models.js";
import Tipe1 from "../models/tipe_1.models.js";
import Tipe2 from "../models/tipe_2.models.js";
import Gestasional from "../models/gestasional.models.js";
import TipeKhusus from "../models/tipe_khusus.models.js";
import Diagnosis from "../models/diagnosis.models.js";

function convertToBinary(pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction) {
    const binaryResult = {}

    if (pregnancies >= 1) {
        binaryResult.Pregnancies = 1
    } else {
        binaryResult.Pregnancies = 0
    }

    if (glucose > 140) {    
        binaryResult.Glucose = 1
    } else {
        binaryResult.Glucose = 0
    }

    if (bloodPressure > 80) {
        binaryResult.BloodPressure = 1
    } else {
        binaryResult.BloodPressure = 0
    }

    if (skinThickness > 20) {
        binaryResult.SkinThickness = 1
    } else {
        binaryResult.SkinThickness = 0
    }

    if (insulin > 100) {
        binaryResult.Insulin = 1
    } else {
        binaryResult.Insulin = 0
    }

    if (bmi > 25) {
        binaryResult.BMI = 1
    } else {
        binaryResult.BMI = 0
    }

    if (diabetesPedigreeFunction > 0.5) {
        binaryResult.DiabetesPedigreeFunction = 1
    } else {
        binaryResult.DiabetesPedigreeFunction = 0
    }

    return binaryResult
}

function calculateSMC(case1, case2) {
    const features = Object.keys(case1);
    let matches = 0;
    features.forEach(feature => {
        if (case1[feature] === case2[feature]) {
            matches++;
        }
    });
    return matches / features.length;
}

export const getData = async (req, res) => {
    try {
        const diabetes = await Diabetes.find();
        if (!diabetes || diabetes.length === 0) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json(diabetes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const simpleMatching = async (req, res) => {
    try {
        const { pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction } = req.body;
        const test = {pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction};
        console.log(test)

        const newCase = convertToBinary(pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction);
        console.log(newCase);

        const oldCase = await Diabetes.findOne().select("-_id")
        console.log(oldCase);
        console.log(convertToBinary(oldCase.Pregnancies, oldCase.Glucose, oldCase.BloodPressure, oldCase.SkinThickness, oldCase.Insulin, oldCase.BMI, oldCase.DiabetesPedigreeFunction));
        const smc = calculateSMC(convertToBinary(oldCase), newCase);

        res.status(200).json({ smc });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const similaritas = async (req, res) => {
    try {
        const {
            dibawah20, diatas20, ortuTipe1, ortuTipe2, obesitas, hamil, pascaRadiasi, pascaKemo, matiRasaTangaKaki,
            polidipsia, poliuris, polifagia, turunBB, cpeptideRendah, insulinTinggi,
            gulaDarahTinggi, insulinRendah, mudahLelah, nafasBuah, pandanganRabun, borok, mualMuntahSakitPerut,
            mulutKering, gatalGatal, riwayatPenyakitGulaInsulinProtein, badanLemasNgantuk, kepalaPusing
        } = req.body;

        // Fungsi untuk mengubah input "ya" menjadi 1 dan "tidak" menjadi 0
        const convertToBinary = (value) => {
            return value.toLowerCase() === 'ya' ? 1 : 0;
        };

        // Mengubah nilai umur menjadi 1 jika lebih dari 20
        // const umurBinary = umur > 20 ? 1 : 0;

        // Membuat array yang berisi nilai-nilai biner dalam bentuk baris
        const binaryArray = [
            convertToBinary(dibawah20),
            convertToBinary(diatas20),
            convertToBinary(ortuTipe1),
            convertToBinary(ortuTipe2),
            convertToBinary(obesitas),
            convertToBinary(hamil),
            convertToBinary(pascaRadiasi),
            convertToBinary(pascaKemo),
            convertToBinary(matiRasaTangaKaki),
            convertToBinary(polidipsia),
            convertToBinary(poliuris),
            convertToBinary(polifagia),
            convertToBinary(turunBB),
            convertToBinary(cpeptideRendah),
            convertToBinary(insulinTinggi),
            convertToBinary(gulaDarahTinggi),
            convertToBinary(insulinRendah),
            convertToBinary(mudahLelah),
            convertToBinary(nafasBuah),
            convertToBinary(pandanganRabun),
            convertToBinary(borok),
            convertToBinary(mualMuntahSakitPerut),
            convertToBinary(mulutKering),
            convertToBinary(gatalGatal),
            convertToBinary(riwayatPenyakitGulaInsulinProtein),
            convertToBinary(badanLemasNgantuk),
            convertToBinary(kepalaPusing)
        ];
        console.log(binaryArray)

        const newDiagnosis = new Diagnosis({
            dibawah20: convertToBinary(dibawah20),
            diatas20: convertToBinary(diatas20),
            ortuTipe1: convertToBinary(ortuTipe1),
            ortuTipe2: convertToBinary(ortuTipe2),
            obesitas: convertToBinary(obesitas),
            hamil: convertToBinary(hamil),
            pascaRadiasi: convertToBinary(pascaRadiasi),
            pascaKemo: convertToBinary(pascaKemo),
            matiRasaTangaKaki: convertToBinary(matiRasaTangaKaki),
            polidipsia: convertToBinary(polidipsia),
            poliuris: convertToBinary(poliuris),
            polifagia: convertToBinary(polifagia),
            turunBB: convertToBinary(turunBB),
            cpeptideRendah: convertToBinary(cpeptideRendah),
            insulinTinggi: convertToBinary(insulinTinggi),
            gulaDarahTinggi: convertToBinary(gulaDarahTinggi),
            insulinRendah: convertToBinary(insulinRendah),
            mudahLelah: convertToBinary(mudahLelah),
            nafasBuah: convertToBinary(nafasBuah),
            pandanganRabun: convertToBinary(pandanganRabun),
            borok: convertToBinary(borok),
            mualMuntahSakitPerut: convertToBinary(mualMuntahSakitPerut),
            mulutKering: convertToBinary(mulutKering),
            gatalGatal: convertToBinary(gatalGatal),
            riwayatPenyakitGulaInsulinProtein: convertToBinary(riwayatPenyakitGulaInsulinProtein),
            badanLemasNgantuk: convertToBinary(badanLemasNgantuk),
            kepalaPusing: convertToBinary(kepalaPusing)
        })


        await newDiagnosis.save();
        console.log(newDiagnosis)

        const tipe_1 = await Tipe1.findOne().select("-_id").lean();
        const tipe_2 = await Tipe2.findOne().select("-_id").lean();
        const gestasional = await Gestasional.findOne().select("-_id").lean();
        const tipeKhusus = await TipeKhusus.findOne().select("-_id").lean();

        const tipe1Array = Object.values(tipe_1);
        const tipe2Array = Object.values(tipe_2);
        const gestasionalArray = Object.values(gestasional);
        const tipeKhususArray = Object.values(tipeKhusus);

        console.log(tipe1Array, tipe2Array, gestasionalArray, tipeKhususArray);

        const smctipe1 = calculateSMC(binaryArray, tipe1Array);
        const smctipe2 = calculateSMC(binaryArray, tipe2Array);
        const smcgestasional = calculateSMC(binaryArray, gestasionalArray);
        const smctipekhusus = calculateSMC(binaryArray, tipeKhususArray);

        res.status(200).json({ smctipe1, smctipe2, smcgestasional, smctipekhusus });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
