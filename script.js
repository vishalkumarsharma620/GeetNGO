var navoptions = document.getElementById('navoptions');
var menuicon = document.getElementById('menuicon');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var opt5 = document.getElementById('opt5');

menuicon.addEventListener('click', ()=>{

    if(navoptions.style.height == '0px'){

        navoptions.style.height = '285px';

        opt1.style.height = '45px';
        opt1.style.width = '100%';
        opt2.style.height = '45px';
        opt2.style.width = '100%';
        opt3.style.height = '45px';
        opt3.style.width = '100%';
        opt4.style.height = '45px';
        opt4.style.width = '100%';
        opt5.style.height = '45px';
        opt5.style.width = '100%';

        opt1.style.fontSize = '17px';
        opt2.style.fontSize = '17px';
        opt3.style.fontSize = '17px';
        opt4.style.fontSize = '17px';
        opt5.style.fontSize = '17px';
    }else{
        navoptions.style.height = '0px';

        opt1.style.height = '0px';
        opt1.style.width = '0px';
        opt2.style.height = '0px';
        opt2.style.width = '0px';
        opt3.style.height = '0px';
        opt3.style.width = '0px';
        opt4.style.height = '0px';
        opt4.style.width = '0px';
        opt5.style.height = '0px';
        opt5.style.width = '0px';

        opt1.style.fontSize = '0px';
        opt2.style.fontSize = '0px';
        opt3.style.fontSize = '0px';
        opt4.style.fontSize = '0px';
        opt5.style.fontSize = '0px';
       
    }
});

