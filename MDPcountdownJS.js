  
  /// SET A INCIDENT // RELOAD PAGE // OBSOLETE 
    function settime () {
        //httpGet("./reinit.php");
        var tday = new Date();
        
        var tdaytts = tday.getTime();
        var postdata = { "nowdate":tdaytts,"name":"lam"};
        var finishurl = "index.php";    


    }

    function getNum_Time() {
        //httpGet("./reinit.php");
        var tday = new Date();
        return tday.getTime();
        // var postdata = { "nowdate":tdaytts,"name":"lam"};
        // var finishurl = "index.php";    
    }

/// GET DATA url 
    async function httpGet(theUrl)
        {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
            xmlHttp.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
            xmlHttp.send(  );
            console.log(xmlHttp);
            return xmlHttp.responseText;
        }

/// POST DATA AJAX RE INIT   
    function Postdata(theUrl, postdata,finishurl)
        {       
            console.log("HTTP POST >> ");
			$.ajax({
					type: "POST",
					url: theUrl,
					dataType: "json",
					data: { "jsondata":postdata}
						});
		}


// Sauvegarde dans le fic json 
    function sav() {
        var tday = new Date();
        document.getElementById("msg").innerHTML = "ecriture ...";
        // var tdaytts = tday.getTime();
        // //profilename 
        // var tdaytts= getNum_Time();
        var postdata = {"jsondata":modeldata};
        var finishurl = "index_MDP.php";    
       Postdata("updateMDPModel.php",postdata,finishurl);
    }


/// Dessine l'indicateur de vetusté

 function RenderTimemeter(DaysPassed) {
    var level = 0;
    // seuils   0-25 : green   15-50 : orange   50-60 : red 
    if (DaysPassed < 25) { level=1; }
    else if  (DaysPassed > 50) {
         level=3 ;}
        else {
            level=2;
        }
    
    var statemeter = "<ul class='StateIndicator'>";
    for (var i = 1; i < 4; i++) {
        var mark = i==level?"active":"";
        console.log("i="+i);
        statemeter +=  "<li class='StateIndicator-indic "+mark+"'>■</li>";
    }
    
    statemeter += "</ul>";
    return statemeter;
 }

async function init() {
    return  httpGet("./cred.json");
    console.log(modeldata);
}

//*************** ******* ****************** // 
//*************** DRAW DYNAMIC  ************ // 
//*************** ******* ****************** // 

/// Dessine le buffer HTML des lignes de MDP dapres le fic json 
/// si infile=false dessine depuis la variable modeldata

    function draw(collectiondatas) {
        //var e = new Date("Jan 08, 2023 01:00:00")
        // e.getTime()     // 1673136000000
        
        console.log("refresh");
        document.getElementById("content").innerHTML = "";
        var db =  collectiondatas;
            db.forEach((item)=> {
                document.getElementById("content").innerHTML += RenderTemplate(item);
                console.log(item.profilename);
                console.log(item.initdate);
                getdaysbefore(item.initdate);
        });
        return db;
    }


     function RenderTemplate(Usdata) {
        var dateObject = new Date((Number(Usdata.initdate)));
        var dformat = dateObject.getDate() +  "/"+ (dateObject.getMonth()+1) + "/"+  dateObject.getFullYear();
        var day_old =getdaysbefore(Usdata.initdate);
        var HtmlBuffer = "    <li class='list-group-item user' id="+Usdata.id+"><i class='material-icons c-orange'>vpn_key</i> ";
        HtmlBuffer +=  "&nbsp;<span>"+Usdata.profilename+"</span> <span>Date init "+dformat+"</span> Ancienneté : <span><em id='nbjour'>"+day_old+"</em> jours</span> <span> ";
        var HTMLstatemeter = RenderTimemeter(day_old);
        HtmlBuffer +=  HTMLstatemeter +"</span><span><button type='button'  onclick='resetmdp("+Usdata.id+")' class='btn-lg btn-light'>Renouveler</button> </span>    </li>";
        return HtmlBuffer   ;
    }


 /// COMPARE AND DECODE DAYS DIFFERENCE 

    function getdaysbefore(initTMS) {
        var tday = new Date();
        console.log("compare between");
        console.log(tday.getTime());
        var timestamp = initTMS;
        var time_difference = ((tday.getTime()) - (timestamp))
        var days_difference = Math.floor(time_difference / (1000 * 60 * 60 * 24 ));
        console.log("depuis "+ days_difference +" jours");
        return days_difference;
    }


//*************** ******* ************ // 
//*************** ACTIONS ************ // 
//*************** ******* ************ // 

function adduser() {
         console.log("new user has id number "+ modeldata.length);
         var nuser =  {
            "id":modeldata.length,
            "profilename":document.getElementById("username").value,
            "initdate":getNum_Time()
        };
        console.log("generated");
        //alert ("Ajout de l'user "+ document.getElementById("username").value);
        modeldata.push(nuser);
        draw(modeldata);
        sav();
        $('#AddModal').modal('hide');
    }

// Reinitialise le mdp a la date du jour  
 function resetmdp(itemid) {
    if (confirm("Voulez-vous re-initialiser votre mot de passe a la date d'aujourd'hui")) {
        console.log("L'item "+itemid+" choisi ");
        var newtts = new Date();
        var tdaytts =newtts.getTime()
        /// CODE MAJ 
        var getrank = modeldata.findIndex((item)=>{return item.id == itemid});
           console.log("rank is "+ getrank);
        if (getrank != -1) {
            modeldata[getrank].initdate = tdaytts;
        } 
        /// CODE MAJ END 
        console.log("L'item "+itemid+" a ete initialisé  avec la date du jour  ");
        
        alert(" inscription de "+newtts.getTime()+" temps init initié a "+newtts.getDate() +  "/"+ (newtts.getMonth()+1) + "/"+  newtts.getFullYear());
    }else {
        console.log("annulé");
    }
    sav();
    draw(modeldata);
 }





var modeldata ;
httpGet("./cred.json").then((dataready)=> { modeldata = JSON.parse(dataready);draw(modeldata)});
