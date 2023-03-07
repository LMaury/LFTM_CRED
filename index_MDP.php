<html>
<head>
<title> LifeTime Credencials v1  </title>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@700;800&family=Dosis:wght@200;600&display=swap" rel="stylesheet">

<meta http-equiv="Pragma" content="no-cache" />
<script src="../../material/includes/jquery-3.3.1.slim.min.js"></script>
<script src="../../material/includes/popper.min.js"></script>
<script src="../../material/includes/bootstrap.min.js"></script>
<script src="../../material/daemonite_mat/js/material.min.js"></script>
<link rel='stylesheet' href="../../material/daemonite_mat/css/material.min.css" type='text/css' media='all' />

<meta http-equiv="Cache-Control" content="no-cache, must-revalidate" />


<style type="text/css">
    body {
        background:#e9e9e9;
        background: url("brushed_noisy_wallpaper.jpg") no-repeat ;
        background-size:cover;
    }

    .box p {
        text-align: center;
    color: #e71d1d;
    text-shadow: 0px 0px 2px #a54444;
    font-size: 35px;
    font-family: 'Alegreya Sans SC', sans-serif;
    margin: 0;
    margin-bottom: -8px;
    font-weight: 900;


    } 

    .box {
        overflow: hidden;
    padding: 48px;
    background-color: white;
    border-radius: 5px;
    box-shadow: -2px 2px 3px black;
    width: 850px;
    min-height: 470px;
    margin: auto;
    margin-top: 255px;
    background: rgb(245 245 245);
    border-top: 3px solid #c30f0f;
    border-bottom: 3px solid #c30f0f;
    }

    .c-orange {
        color:#dfa013;
    }

    .box p.information_panel {
        text-transform: uppercase;
        font-family: 'arial';
        color: black;
        font-size: 10pt;
        text-shadow: none;
        font-weight: 100;
    }

    .user  {
        display:block;

        margin:5px 0px;
    }

    .user span {
        display:inline-block;
        width:85px;
    }

    .box p  .information_subj {
        font-family:'monospace'!important;    
        color:grey;
    }

    button {
        border:0;
    }

    .up {
        text-transform: uppercase;
    }

    li.list-group-item span{
        display:inline-block;
        width:15%;
    }
    /* state indicatyor */ 

    .StateIndicator {
        display:inline-block;
        width:80px;
        padding:0 15px;
        background:#e3e3e3;
        list-style-type:none;
        margin-right:25px;
    }

    .StateIndicator-indic {
        font-size:12pt;
        display:inline-block;
        color:#ccc;
    }

    

    

    .StateIndicator li.active:nth-child(1) {
        color:#8bc34a/*green*/;
    }

    .StateIndicator li.active:nth-child(2) {
        color:#ffc107/*orange*/;
    }

    .StateIndicator li.active:nth-child(3) {
        color:#ed1313 /*red*/;
    }


    .a-fade {
        animation:0.3s ease-in fade ;
    }

    @keyframes fade {
    0% {
        opacity: 0;
    }
    
    20% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
    
}

    </style>

</head>

<body  onload="getdaysbefore(); ">
<!--- States -->
<!--  <ul class="StateIndicator">
     <li class="StateIndicator-indic">■</li>
     <li class="StateIndicator-indic active">■</li>
     <li class="StateIndicator-indic">■</li>
</ul> -->
<!--- States -->

<div class="container box a-fade">
    <h2 class="up"><i class="material-icons">fingerprint</i> LifeTime Credencials   </h2>
    <br>
    <button type="button" class="btn btn-info float-right" data-toggle="modal" data-target="#AddModal"> Suivre un nouveau  profil </button>
    <br><br><br>
    <ul class="list-group">
        <SPAN id="content"></SPAN>
    </ul>
    <br><br><br>
    <br>
    <br><br>
</div>

<!-- Modal -->
<div class="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="AddModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="AddModalLabel"><i class="material-icons">face</i> Ajouter un profil </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Vous pouvez ajouter un utilisateur.
        <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text" id="">Nom du profil </span>
            </div>
            <input id="username" type="text" class="form-control">
            <br><br><br><br><br>
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="adduser()">Ajouter </button>
      </div>
    </div>
  </div>
</div>



<!---  JS   --->
<script src="./jquery-3.2.1.min.js"></script>
<script src="./MDPcountdownJS.js"></script>

<br>
<br>
<br>
<div id="msg"></div>

</body>
<html>
