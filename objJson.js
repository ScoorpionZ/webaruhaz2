var tarsasTomb =[];
$(function(){
    console.log("Hello világ");
    //console.log(tarsasTombJs);
    //var tarsasTomb= JSON.parse(tarsasTombJs);
    //console.log(tarsasTomb);

    $.ajax({
        url: "termekek.json", 
            success: function(result){
                console.log(result);
                tarsasTomb=result;
                kiir();
            }
    });
    $("#OK").click(ment);
    $("#rendez").click(rendze);
});

function kiir(){
    $("article").empty();
    console.log(result);
    $("article").append("<table>");
    $("article>table").append("<tr>");
    $("article>table>tr").append("<th>termek Nev<th><th>Ár<th><th>Típus<th>");
    for (let i = 0; i < tarsasTomb.length; i++) {
        $("article>tabel").append("<tr>");
        for(var item in tarsasTomb[i]){
            $("article>tabel>tr").eq(i+1).append("<td>"+tarsasTomb[i][item]+"</td>");
        }
    }
}

function ment(){
    var ujJatek={};
    ujJatek.termeknev=$("#nev").val();
    ujJatek.ar=$("#ar").val();
    ujJatek.tipus=$("#tipus").val();
    if($("input:radio[name=tipus]:checked").val()==="i"){
        ujtermek.tipus="tarsas";
    }
    else{
        ujtermek.tipus="kartya";
    }
    tarsasTomb.push(ujJatek);
    kiir();
}

var irany = true;
function rendez(){
    if(irany==true){
        tarsasTomb.sort(
            function(a,b){
                return Number(a.nev > b.nev)-0.5;
            }
        );
        irany=false;
    }
    else{
        tarsasTomb.sort(
            function(a,b){
                return Number(a.nev < b.nev)-0.5;
            }
        );  
        irany=true;
    }
    
    kiir();
}

// var tarsasTomb = [{
//     termeknev:"Monopoli",
//     ar:1500,
//     tipus:"tablajáték",
// },
// {
//     termeknev:"Uno",
//     ar:1000,
//     tipus:"Kártyajáték",
// }];

//var tarsasTombJs = '[{"termeknev":"Monopoli","ar":"1500","tipus":"tablajáték"},{"termeknev":"Uno","ar":"1000","tipus":"Kártyajáték"}]';