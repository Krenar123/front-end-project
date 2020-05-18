const log = $('#log');
const login = $('.label__log');
const add_log = $('.main__log');

const reg = $('#register');
const register = $('.label__register');
const add_reg = $('.main__reg');



//pjesa ku behet validimi 
const email = "krenard@gmail.com";
const pass = "krenar";
const em = "seeu.edu.mk";

var email_2 = "";
var pass_2 = "";
$( document ).ready(function() {
    
    log.on('click',function(){

        register.removeClass('active');
        add_reg.removeClass('active');
    
        login.addClass('active');
        add_log.addClass('active');
        console.log($(this).parent());
        
        
    });
    reg.on('click',function(){
        login.removeClass('active');
        add_log.removeClass('active');
        register.addClass('active');
        add_reg.addClass('active');
    });

    login.click(function(){
        
        register.removeClass('active');
        add_reg.removeClass('active');
        
        login.addClass('active');
        add_log.addClass('active');
    });
    register.click(function(){
        login.removeClass('active');
        add_log.removeClass('active');
        register.addClass('active');
        add_reg.addClass('active');
    });
    $('#log__form').submit(function(e){
        e.preventDefault();
        if($('#log__email').val() == email){
            if($('#log__password').val() === pass){
                window.location.href = './content/index.html';
            }
            else{
                alert('Passwordi gabim');
            }
        }
        else if(email_2 != ""){
            if($('#log__email').val() == email_2){
                if($('#log__password').val() === pass_2){
                    window.location.href = './content/index.html';
                }
                else{
                    alert('Passwordi gabim');
                }
            }
        }
        else{
            alert('Te dhena gabim');
        }
    });
    //Kom kriju local storage WEB API
    $('#reg__form').submit(function(e){
        e.preventDefault();
        var string  = $('#reg__email').val();
        var string1 = "";
        var j =0;
       
        for(let i =0;i<string.length-1;i++){
            if(string[i]=='@'){
                while(i<string.length-1){
                    string1 = string1 + string[i+1];
                    
                    i++;
                }
                break;
            }
        }
        if(string1 == em){
            if($('#reg__pass').val() == $('#reg__con').val()){
                var object = {
                    email: $('#reg__email').val(),
                    password:$('#reg__pass').val()
                }
                
                var param1 = JSON.stringify(object);
                
                localStorage.setItem('register', param1);
                window.location.href = '#';
                email_2 =  JSON.parse(localStorage.getItem('register')).email;
                pass_2 = JSON.parse(localStorage.getItem('register')).password;
                console.log(email_2+ " "+ pass_2);
            }
            else{
                alert('Konfirmimi passit o gabim');
            }
        }
        else{
            console.log('Nuk lejohet regjsitrimi perveq studeteve te SEEU...');
        }
    });
});