const display  = document.getElementById('data');
const btn = Array.from(document.getElementsByTagName('button'));

btn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
       switch (e.target.innerText) {
        case 'AC':
             display.innerText = '';
            break;

        case '<=':
            if(display){
            display.innerText = display.innerText.slice(0,-1);
            }break;

        case '=':
            try{
                display.innerText = eval(display.innerText);
            }catch{
                display.innerText = 'error';
            }
            break;
        
        default:
            display.innerText +=e.target.innerText;
            break;
       }
    })
})

