$(document).ready(function(){
    //me shtu klasen active edhe secila qe klikohet e merr at
    //at klas edhe loadohen te dhenat per at lend
    const programim = $('#programim');
    const arkitektur = $('#arkitektur');
    const web = $('#web');
    const pjesa = $('.pjesa_kryesore');

    const kollo = $('#kollokviume');
    const ushtrime = $('#ushtrime');
    const profesor = $('#profesor');

    const paragrafi_mendime =  $('.paragrafi_mendime');
    const paragrafi_perfitimi = $('.paragrafi_perfitimi');
    const paragrafi_perfitimi2 = $('.paragrafi_perfitimi2');
    //inputi ne rast se ka shkarkim
    const input = $('#input');

    input.change(function(){
        changeImage(this);
    });
    function changeImage(input){
        var reader;
        if(input.files && input.files[0]){
            reader = new FileReader();
            reader.onload = function(e){
                if(programim.hasClass('active')){
                    
                    pjesa.append('<li style="display:flex;justify-content:center;"> <img style="width:200px;height:200px;" src="'+e.target.result+'"> </li>');
                    pjesa.append('<br>');

                }
                else if(arkitektur.hasClass('active')){
                    pjesa.append('<li style="display:flex;justify-content:center;"> <img style="width:200px;height:200px;" src="'+e.target.result+'"> </li>');
                    pjesa.append('<br>');
                    
                }
                else if(web.hasClass('active')){
                    pjesa.append('<li style="display:flex;justify-content:center;"> <img style="width:200px;height:200px;" src="'+e.target.result+'"> </li>');
                    pjesa.append('<br>');
                }
            }
            reader.readAsDataURL(input.files[0])
        }
    }
    if(programim.hasClass('active')){
        $('.h3').text("Programimi ne C++");
        paragrafi_mendime.text("Zakonisht paragjykimet e studenteve per kete lend jan shum te kqija pasiqe hasin ne probleme bazike sintaksore, mirpo me kalimin e kohes nese punohet mir lenda esht shum motivuse dhe shum interesante me shum sfida. perseri mbetet lenda me e rend ne Shkencat Kompjuterike.")
        paragrafi_perfitimi.text("Programimi ne C++ perfshin bazat e programimin, ku mesohet sintaksa dhe shum pjes tjera bazike duke i perfshir funksjonet, pointeret, variablat deri tek strukturat dhe klasat te cilat jan me te avansuar.");
        paragrafi_perfitimi2.text("Kjo lend esht e rendesishme pasiqe nese mesohen bazat e programimit shum leht pastaj mesohen te tjerat nese nuk mesohet baza ather cdoher do te kesh problem,Nje tjeter perfitim i ksaj lenda esht se nese meson C++ leht pastaj kalon ne nje gjuh tjeter programuese.");
       
    }
    if(kollo.hasClass('active')){
        $('#h6').text("Kollokviume");
        $.getJSON("posts.json", function(obj) {
            $(obj).each(function(i){
              let a = obj[i].programim[0].kollokviume;
              console.log(a[0]);
              $(a).each(function(i){
                pjesa.append('<p> Kolokviumi.'+(i+1)+'</p>');
                pjesa.append('<li style="display:flex;justify-content:center;"> <img style="display:flex;justify-content:center;"> <img style="width:200px;height:200px;" src="./fot/'+a[i]+'"> </li>');
                pjesa.append('<br>');
              })
              
            })
              
        });
       
    }
    ushtrime.click(function(e){
        $('#h6').text("Ushtrime");
        kollo.removeClass('active');
        profesor.removeClass('active');
        ushtrime.addClass('active');
        pjesa.empty();
        if(programim.hasClass('active')){
            
            $.getJSON("posts.json", function(obj) {
                $(obj).each(function(i){
                let a = obj[i].programim[0].ushtrime;
                console.log(a[0]);
                $(a).each(function(i){
                    pjesa.append('<p> Ushtrimi.'+(i+1)+'</p>');
                    pjesa.append('<li style="display:flex;justify-content:center;">' +a[i]+' </li>');
                    pjesa.append('<br>');
                })
                
                })
                
            });
        }
        else if(arkitektur.hasClass('active')){
            
            $.getJSON("posts.json", function(obj) {
                $(obj).each(function(i){
                let a = obj[i].arkitektur[0].ushtrime;
                console.log(a[0]);
                $(a).each(function(i){
                    pjesa.append('<p> Ushtrimi.'+(i+1)+'</p>');
                    pjesa.append('<li style="display:flex;justify-content:center;">' +a[i]+' </li>');
                    pjesa.append('<br>');
                })
                
                })
                
            });
        }
        else if(web.hasClass('active')){
            $.getJSON("posts.json", function(obj) {
                $(obj).each(function(i){
                let a = obj[i].web[0].ushtrime;
                console.log(a[0]);
                $(a).each(function(i){
                    pjesa.append('<p> Ushtrimi.'+(i+1)+'</p>');
                    pjesa.append('<li style="display:flex;justify-content:center;">' +a[i]+' </li>');
                    pjesa.append('<br>');
                })
                
                })
                
            });
        }
    })
    kollo.click(function(e){
        $('#h6').text("Kollokviume");
        ushtrime.removeClass('active');
        profesor.removeClass('active');
        kollo.addClass('active');
        
        pjesa.empty();
        if(programim.hasClass('active')){
            
            $.getJSON("posts.json", function(obj) {
                $(obj).each(function(i){
                let a = obj[i].programim[0].kollokviume;
                console.log(a[0]);
                $(a).each(function(i){
                    pjesa.append('<p> Kolokviumi.'+(i+1)+'</p>');
                    pjesa.append('<li style="display:flex;justify-content:center;"> <img style="width:200px;height:200px;" src="./fot/'+a[i]+'"> </li>');
                    pjesa.append('<br>');
                })
                
                })
                
            });
        }
        else if(arkitektur.hasClass('active')){
            
            $.getJSON("posts.json", function(obj) {
                $(obj).each(function(i){
                let a = obj[i].arkitektur[0].kollokviume;
                console.log(a[0]);
                $(a).each(function(i){
                    pjesa.append('<p> Kolokviumi.'+(i+1)+'</p>');
                    pjesa.append('<li style="display:flex;justify-content:center;"> <img style="display:flex;justify-content:center;"> <img style="width:200px;height:200px;" src="./fot/'+a[i]+'"> </li>');
                    pjesa.append('<br>');
                })
                
                })
                
            });
        }
        else if(web.hasClass('active')){
            $.getJSON("posts.json", function(obj) {
                $(obj).each(function(i){
                let a = obj[i].web[0].kollokviume;
                console.log(a[0]);
                $(a).each(function(i){
                    pjesa.append('<p> Kolokviumi.'+(i+1)+'</p>');
                    pjesa.append('<li style="display:flex;justify-content:center;"> <img style="display:flex;justify-content:center;"> <img style="width:200px;height:200px;" src="./fot/'+a[i]+'"> </li>');
                    pjesa.append('<br>');
                })
                
                })
                
            });
        }
    })
    profesor.click(function(e){
        $('#h6').text("Profesoret");
        ushtrime.removeClass('active');
        kollo.removeClass('active');
        profesor.addClass('active');
        
        pjesa.empty();
        if(programim.hasClass('active')){
            
            $.getJSON("posts.json", function(obj) {
                $(obj).each(function(i){
                let a = obj[i].programim[0].profesor;
                console.log(a[0]);
                $(a).each(function(i){
                    pjesa.append('<p> Profesori - '+(i+1)+'</p>');
                    pjesa.append('<li style="display:flex;justify-content:center;"> <img style="border-radius:50%; width:200px;height:200px;" src="./fot/'+a[i]+'"> </li>');
                    pjesa.append('<br>');
                })
                
                })
                
            });
        }
        else if(arkitektur.hasClass('active')){
            
            $.getJSON("posts.json", function(obj) {
                $(obj).each(function(i){
                let a = obj[i].arkitektur[0].profesor;
                console.log(a[0]);
                $(a).each(function(i){
                    pjesa.append('<p> Profesori - '+(i+1)+'</p>');
                    pjesa.append('<li style="display:flex;justify-content:center;"> <img style="border-radius:50%; width:200px;height:200px;" src="./fot/'+a[i]+'"> </li>');
                    pjesa.append('<br>');
                })
                
                })
                
            });
        }
        else if(web.hasClass('active')){
            $.getJSON("posts.json", function(obj) {
                $(obj).each(function(i){
                let a = obj[i].web[0].profesor;
                console.log(a[0]);
                $(a).each(function(i){
                    pjesa.append('<p> Profesori - '+(i+1)+'</p>');
                    pjesa.append('<li style="display:flex;justify-content:center;"> <img style="border-radius:50%; width:200px;height:200px;" src="./fot/'+a[i]+'"> </li>');
                    pjesa.append('<br>');
                })
                
                })
                
            });
        }
    })
    arkitektur.click(function(){
        programim.removeClass('active');
        web.removeClass('active');
        arkitektur.addClass('active');
        $('.h3').text("Arkitektura Kompjuterike");
        paragrafi_mendime.empty();
        paragrafi_perfitimi.empty();
        paragrafi_perfitimi2.empty();
        paragrafi_mendime.text("Arkitektura kompjuterike.")
        paragrafi_perfitimi.text("Motherboardi RAM CPU HDD.");
        paragrafi_perfitimi2.text("Cache memoriet  .");
        pjesa.empty();
        $('#h6').text("");
       
    });
    programim.click(function(){
        arkitektur.removeClass('active');
        web.removeClass('active');
        programim.addClass('active');
        paragrafi_mendime.empty();
        paragrafi_perfitimi.empty();
        paragrafi_perfitimi2.empty();
        paragrafi_mendime.text("Zakonisht paragjykimet e studenteve per kete lend jan shum te kqija pasiqe hasin ne probleme bazike sintaksore, mirpo me kalimin e kohes nese punohet mir lenda esht shum motivuse dhe shum interesante me shum sfida. perseri mbetet lenda me e rend ne Shkencat Kompjuterike.")
        paragrafi_perfitimi.text("Programimi ne C++ perfshin bazat e programimin, ku mesohet sintaksa dhe shum pjes tjera bazike duke i perfshir funksjonet, pointeret, variablat deri tek strukturat dhe klasat te cilat jan me te avansuar.");
        paragrafi_perfitimi2.text("Kjo lend esht e rendesishme pasiqe nese mesohen bazat e programimit shum leht pastaj mesohen te tjerat nese nuk mesohet baza ather cdoher do te kesh problem,Nje tjeter perfitim i ksaj lenda esht se nese meson C++ leht pastaj kalon ne nje gjuh tjeter programuese.");
        pjesa.empty();
        $('.h3').text("Programimi ne C++");
        $('#h6').text("");
    })
    web.click(function(){
        arkitektur.removeClass('active');
        programim.removeClass('active');
        web.addClass('active');
        $('.h3').text("Web Teknologjite");
        paragrafi_mendime.empty();
        paragrafi_perfitimi.empty();
        paragrafi_perfitimi2.empty();
        paragrafi_mendime.text("Web teknologjit.")
        paragrafi_perfitimi.text("HTML CSS Javascript.");
        paragrafi_perfitimi2.text("Jquery/Bootstrap .");
        pjesa.empty();
        $('#h6').text("");
    })
    //Tash nese emri id qe osht active pershtatet
});
