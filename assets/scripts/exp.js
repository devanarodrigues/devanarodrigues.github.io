function expandir() {

    let secao2 = document.querySelector('.secao2')
    let display = document.getElementById('show-details').style.display;
    
    if(display == "block")
        document.getElementById('show-details').style.display = 'none';
        else
        document.getElementById('show-details').style.display = 'block'
        secao2.style.height = '550px';
    }

