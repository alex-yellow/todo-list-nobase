let btn = document.querySelectorAll('.btn');
let task = document.querySelectorAll('.task');

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        task[i].classList.toggle('complete');
        if(btn[i].innerHTML == 'Complete'){
            btn[i].innerHTML = 'UnComplete';
        }
        else{
            btn[i].innerHTML = 'Complete';
        }
    });
}

