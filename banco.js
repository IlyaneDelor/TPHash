window.addEventListener('load', BDD);

var db = openDatabase("myDB", "1.0", "TiPS Database Example", 2 * 1024 * 1024);


function BDD(){    

    document.getElementById('btn-save').addEventListener('click', save);
    document.getElementById('btn-delet').addEventListener('click', delet);
    document.getElementById('btn-login').addEventListener('click', login);
    
    db.transaction(function(tx) {

        tx.executeSql("CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY,name TEXT,pass TEXT, email TEXT)" );

});
    
    montrer();
    
}   

function save(){
    var id = document.getElementById('field-id').value;
    var name = document.getElementById('field-name').value;
    var pass = document.getElementById('field-pass').value;
    var mail = document.getElementById('field-mail').value;

    db.transaction(function(tx) {
        if(id){
            tx.executeSql('UPDATE users SET name=?, pass=?, email=? WHERE id=?', [name,pass,mail,id],null);
            document.getElementById('resultReg').textContent = "Your account has been modified ";
        }else{
            mail =CryptoJS.AES.encrypt(mail,"TpHahage");
            pass = MD5.calcMD5(pass);
            tx.executeSql('INSERT INTO users ( name,pass,email) VALUES (?, ?, ?)', [name,pass,mail]);
            document.getElementById('resultReg').textContent = "WELCOME";

        }
    });

    montrer();
    Champs();
    inputSHOW(false);
}

function montrer(){        
    var table = document.getElementById('tbody-register');

    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM users', [], function (tx, result) {
            var rows = result.rows;
            var tr = '';
            for(var i = 0; i < rows.length; i++){
                tr += '<tr>';
                tr += '<td onClick="actualise(' + rows[i].id + ')">' + rows[i].name + '</td>';
                tr += '<td>' + rows[i].pass + '</td>';
                tr += '<td>' + rows[i].email + '</td>';
                tr += '</tr>';                   
            }
            table.innerHTML = tr; 

        }, null);
    });
}
function login(){ 
    var mail = document.getElementById('field-mail-log');
    var pass = document.getElementById('field-pass-log');       
    var _mail = mail.value;
    var _pass = pass.value;
    var resultat = 0;

   
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM users', [], function (tx, result) {
            
           

            var rows = result.rows;
            console.log(rows[0].email);
           console.log(rows[0].pass);
           console.log("---------------------------------")
           console.log(_pass);
           console.log(_mail);


            for(var i = 0; i < rows.length; i++){

               if(_mail == rows[i].email) {

                if(_pass == rows[i].pass) {

                    
                resultat = 1;

                }

            }

        }
    if(resultat == 1){
        document.getElementById('resultlog').textContent = "YOU ARE LOGIN !" +  myFunction(mail);
    }else{
        document.getElementById('resultlog').textContent = "ERROR LOGIN : " ;
    }



     }, null);
   
});
}



function actualise(_id){   

    var id = document.getElementById('field-id');
    var name = document.getElementById('field-name');
    var pass = document.getElementById('field-pass');
    var mail = document.getElementById('field-mail');
    
    id.value = _id;
    
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM users WHERE id=?', [_id], function (tx, result) {
            var rows = result.rows[0];

            name.value = rows.name ;
            pass.value = rows.pass ;
            mail.value = rows.email ;
        });
    });
    inputSHOW(true);
}

function delet(){

    var id = document.getElementById('field-id').value;
    
    db.transaction(function(tx) {
        tx.executeSql("delete FROM users WHERE id=?", [id]);
    });
    
    montrer();
    Champs();
    inputSHOW(false);
}

        function hex_to_ascii(str1)
        {
          var hex  = str1.toString();
          var str = '';
          for (var n = 0; n < hex.length; n += 2) {
            str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
          }
          return str;
        }


        function myFunction(test) {
          
          let decrypted = CryptoJS.AES.decrypt(mail,"TpHahage");
          decrypted = hex_to_ascii(decrypted);
          test = decrypted;
        };


