let textArea = document.querySelector("textarea");
let btn = document.querySelector("button");
let select = document.querySelector("select");
let AllVoice = null;


speechSynthesis.addEventListener("voiceschanged",()=>{
 AllVoice = speechSynthesis.getVoices();
    console.log(AllVoice);
    AllVoice.map((e)=>{
        let option = document.createElement("option")
        option.innerHTML = e.name
        select.appendChild(option)
    })
});

 btn.addEventListener('click',()=>{
    let ex = new SpeechSynthesisUtterance(textArea.value)

     let particularVoices =AllVoice.find((e)=>{
        if(e.name==select.value){
            return e
        }
     });
     ex.voice=particularVoices;
     speechSynthesis.speak(ex);
 });
