function clicking(event){
    parent = document.querySelector('.screen')
    operator = ['-','+','/','*']
    console.log(event.innerText);
    if (! (operator.includes(parent.innerText.slice(-1)) && operator.includes(event.innerText)) ){        
        parent.innerText = parent.innerText + event.innerText
    }  
}
window.addEventListener('keypress',(event)=>{
    operator = ['-','+','/','*',"."]
    key = event.key
    code = event.code
    if ((code.includes('Digit') || operator.includes(key) ) || (code.includes('Numpad') || operator.includes(key))){
     const   parent = document.querySelector('.screen')
        // parent.innerText = parent.innerText + key;
        if (! (operator.includes(parent.innerText.slice(-1)) && operator.includes(key)) ){        
            parent.innerText = parent.innerText + key;
        } 
    }
    else if((key=="c")||(key=="C")){
        clear_screen()
    }
     else if(key=="="){
        evaluate1()
    }
    else{
        alert('press number and operator')
    }

    
})
const evaluate1 =()=>{
   const parent = document.querySelector('.screen')
  const  outputOrginal = document.querySelector('.output')
 const   data = parent.innerText;
    var output = eval(data);
    outputOrginal.innerText = output;
}
const clear_screen =()=>{
    const parent = document.querySelector('.screen')
   const outputOrginal = document.querySelector('.output')
    parent.innerText = '';
    outputOrginal.innerText=0;
    

}
const back_space1=()=>{
    const parent = document.querySelector('.screen')
    console.log(parent);
    
    parent.innerText=parent.innerText.slice(0,length-1);

}
window.addEventListener('keydown',(e)=>{
    const a=(e.key);
    if(a=="Backspace"){
        back_space1()
    }
  

})