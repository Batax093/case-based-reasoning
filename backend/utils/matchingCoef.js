import Diabetes from "../models/diabetes.models";

async function calculateSMC() {
    try {
        // Mengambil semua data dari model Diabetes
        const data = await Diabetes.find();

        // Jika data tidak ditemukan atau kurang dari dua data, kembalikan null
        if (!data || data.length < 2) {
            console.log("Insufficient data for comparison");
            return null;
        }

        // Fungsi untuk konversi data ke biner
        function convertToBinary(data) {
            return {
                pregnancies: data.pregnancies >= 1 ? 1 : 0, // Threshold >= 1
                glucose: data.glucose > 140 ? 1 : 0, // Threshold > 140 mg/dL
                bloodPressure: data.bloodPressure > 80 ? 1 : 0, // Threshold > 80 mmHg
                skinThickness: data.skinThickness > 20 ? 1 : 0, // Threshold > 20 mm
                insulin: data.insulin > 100 ? 1 : 0, // Threshold > 100 mIU/L
                bmi: data.bmi > 25 ? 1 : 0, // Threshold > 25
                diabetesPedigreeFunction: data.diabetesPedigreeFunction > 0.5 ? 1 : 0 // Threshold > 0.5
            };
        }

        // Fungsi untuk menghitung SMC
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

        // Konversi data ke bentuk biner
        const binaryData = data.map(convertToBinary);

        // Hitung SMC antara kasus pertama dan kedua dalam data
        const smc = calculateSMC(binaryData[0], binaryData[1]);
        console.log("SMC:", smc);

        return smc;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Panggil fungsi calculateSMC dan export hasilnya
const smc = await calculateSMC();

export default smc;
