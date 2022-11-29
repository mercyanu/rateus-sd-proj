//METHOD 1 - MINE
let ratingNo;
let opts = document.querySelectorAll('.opt_cont');

opts.forEach(option => {
    option.addEventListener('click', (e) => {
        ratingNo = option.querySelector('.opt').innerHTML;
        option.classList.toggle('active');
        console.log(ratingNo);
        revertOthers(ratingNo);

    })
    
});

function revertOthers(num) {
    opts.forEach(otherOption =>{
        let ratingNo = otherOption.querySelector('.opt').innerHTML;
        if(!(ratingNo == num)){
            otherOption.classList.remove('active');
        }
    })
}

let submit = document.querySelector('#submit');
let scr2 = document.querySelector('#screen2');
let scr1 = document.querySelector('#screen1');

submit.addEventListener('click', () =>{
    if(ratingNo){
        scr1.classList.toggle('hidden');
        scr2.classList.toggle('hidden');
        document.getElementById('rate').innerHTML = ratingNo;
    } else{
        alert("You haven't selected any rating, please do");
    }
    
    });