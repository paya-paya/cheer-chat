
async function question(){
    try{
        const deleteText = document.getElementById("text");
        const deleteReply = document.getElementById("reply");
        deleteText.innerHTML = null;
        deleteReply.innerHTML = null;
        const loadingText = document.getElementById("text");
        loadingText.innerHTML = "しばらくお待ちください…";
        const answer = await axios.get("/api/v1/cheer/1");
        const getReply = document.getElementById("reply");
        getReply.innerHTML = answer.data.content;
        deleteText.innerHTML = null;
        return answer;
    }
    catch(err){
        console.log(err);
    };
};

async function quickReply(){
    try{
        const deleteText = document.getElementById("text");
        const deleteReply = document.getElementById("reply");
        deleteText.innerHTML = null;
        deleteReply.innerHTML = null;
        const loadingText = document.getElementById("text");
        loadingText.innerHTML = "しばらくお待ちください…";
        const answer = await axios.get("/api/v1/cheer/2");
        const getReply = document.getElementById("reply");
        getReply.innerHTML = answer.data.content;
        deleteText.innerHTML = null;
        return answer;
    }
    catch(err){
        console.log(err);
    }
}

async function greatReply(){
    try{
        const deleteText = document.getElementById("text");
        const deleteReply = document.getElementById("reply");
        deleteText.innerHTML = null;
        deleteReply.innerHTML = null;
        const loadingText = document.getElementById("text");
        loadingText.innerHTML = "しばらくお待ちください…";
        const answer = await axios.get("/api/v1/cheer/3");
        const getReply = document.getElementById("reply");
        getReply.innerHTML = answer.data.content;
        deleteText.innerHTML = null;
        return answer;
    }
    catch(err){
        console.log(err);
    }
}

