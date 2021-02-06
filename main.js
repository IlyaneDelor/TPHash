window.addEventListener('load',BDD);

function BDD(){
    document.getElementById('field-name').addEventListener('blur', leave);
    document.getElementById('field-pass').addEventListener('blur', leave);
    document.getElementById('field-mail').addEventListener('blur', leave);   
}
function leave(){
    if(this.value != ''){
        this.offsetParent.className += " actif";
    }else{
        this.offsetParent.className = 'box';
    }
}

function inputSHOW(_show){
    if(_show){
        document.getElementById('field-name').offsetParent.className += " actif";
        document.getElementById('field-pass').offsetParent.className += " actif";
        document.getElementById('field-mail').offsetParent.className += " actif";
        document.getElementById('btn-delete').style.display = 'block';
    }else{
        
        document.getElementById('field-name').offsetParent.className = 'box';
        document.getElementById('field-pass').offsetParent.className = 'box';
        document.getElementById('field-mail').offsetParent.className = 'box';
        //document.getElementById('btn-deletar').style.display = 'none';
    }
}

function Champs(){
    
    document.getElementById('field-id').value = '';
    document.getElementById('field-name').value = '';
    document.getElementById('field-pass').value = '';
    document.getElementById('field-mail').value = '';
}