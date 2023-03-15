async function quickReply(){
    try{
        console.log('ok');
        const answer = await axios.get("/api/v1/cheer");
        console.log(answer.data.content);
        return answer;
    }
    catch(err){
        console.log(err);
    }
}

