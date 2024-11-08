import { getAllQuiz } from "../servieces/api";

const app = {
    renderListQuiz : async function(){
        const data = await getAllQuiz();// bất đồng bộ
        console.log(data);// đồng bộ
        
    },
    start: function(){
        this.renderListQuiz();
    }
}
app.start()