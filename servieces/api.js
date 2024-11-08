export const getAllQuiz = async ()=>{
try {
    const res = fetch('http://localhost:3000/quizs'); // call api bất đồng bộ
    const data = res.json()
    return data;
} catch (error) {
    alert("Lỗi");
}
}