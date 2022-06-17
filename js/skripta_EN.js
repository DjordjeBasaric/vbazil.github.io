
let Oglas ={
    ime : "",
    opis : "",
    telefon : "",
    tip: ""

};
let Komentar = {
    imeKorisnika:"",
    komentar: "",
    datum: "",
    indeks: ""
};

let nizKomentara=[];
function postaviKomentar(i){
    let Komentar = {
        imeKorisnika:"",
        komentar: "",
        datum: "",
        indeks: ""
    };

    if (localStorage.getItem("nizKomentara") == null)
    {
        localStorage.setItem("nizKomentara", JSON.stringify(nizKomentara));
    }
    else nizKomentara = JSON.parse(localStorage.getItem("nizKomentara"));



    Komentar.imeKorisnika = "Petar Petrovic"
    Komentar.komentar = document.getElementById("komentar"+i).value;

    Komentar.indeks = i;

    let vreme = new Date();
    let datum= vreme.getFullYear()+'/'+(vreme.getMonth()+1)+'/'+vreme.getDate();
    let satiMinuta = vreme.getHours() + ":" + vreme.getMinutes() + ":" + vreme.getSeconds();
    Komentar.datum = datum+' '+satiMinuta;


    nizKomentara.push(Komentar);

    localStorage.setItem("nizKomentara", JSON.stringify(nizKomentara));
    jedanKom(Komentar)
}


function ispisiKomentar(Komentar){
    $(document).ready(function(){
        let nizKomentara = JSON.parse(localStorage.getItem("nizKomentara"));

        if(nizKomentara!=null){
            for(let i=0;i<nizKomentara.length;i++){
                jedanKom(nizKomentara[i]); 
            }
        }
    })
    
}

function jedanKom(Komentar){
    $("#collapse-"+Komentar.indeks)
    .append($("<div class='bg-white' style='padding: 5px; margin-top:10px; margin-bottom:10px; border-radius: 10px'></div>")
        .append($("<div class='mt-2 text-left'></div>")
            .append($("<h6></h6>").append(Komentar.imeKorisnika))//ISPRAVITI I UNETI DINAMICKI ELEMENTE
            .append($("<h7></h7>").append(Komentar.datum))
            .append($("<p></p>").append(Komentar.komentar))
        )
    )
}

function mojiOglasi(){
    $(document).ready(function(){
        
        
        let nizOglasa = JSON.parse(localStorage.getItem("nizOglasa"));

        for(let i=1;i<nizOglasa.length;i++){
        
            $("#oglasi").append(
                $("<div></div>").attr("class", "col-md-6 col-lg-4 mb-4").attr("id", "oglas"+i).append(
                    $("<div></div").attr("class", "d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5")
                    .append($("<img>").attr("class", "d-flex justify-content-center display-3 font-weight-normal text-secondary mb-3 slika")
                        .attr("src", "slike/" + nizOglasa[i].tip+ ".jpeg").css({
                            "width" : "100px",
                            "height": "100px",
                            "margin-left" : "70px",
                            
                        }))
                    .append($("<h3></h3>").attr("class", "mb-3").append(nizOglasa[i].ime))
                    .append($("<p></p>").append(nizOglasa[i].opis))
                    .append($("<h6></h6>").append("Phone number: ").append(nizOglasa[i].telefon))
                    .append($("<div class='d-flex' justify-content-center row></div>")
                        .append($("<div class='col-md-12'></div>")
                            .append($("<div class='d-flex flex-column comment-section id='myGroup'></div>")
                                .append($("<div class='like p-2 cursor action-collapse' data-toggle='collapse' aria-expanded='true'></div>").attr("aria-controls","collapse-"+i).attr("href", "#collapse-"+i)
                                    .append($("<span class='ml-1'>Comments</span>"))
                                )
                                .append($("<div class='bg-light p-2 collapse' data-parent='#myGroup' ></div>")
                                    
                                    .append($("<div class='d-flex align-items-start'></div>")
                                            .append($("<img class='rounded-circle' src='slike/defaultPerson.jpeg' width='40'>"))
                                            .append($("<textarea class='form-control ml-1 shadow-none textarea'></textarea>").attr("id","komentar"+i))    
                                        ).attr("id","collapse-"+i)
                                        .append($("<div class='mt-2 text-right'></div>")
                                            .append($("<button class='btn btn-primary btn-sm shadow-none' type='button'>Posta a comment</button>").attr("onclick","postaviKomentar(" + i+ ")"))
                                        )
                                )
                            )
                        )
                    )
                    
                        
                )
            )
        }
    });
}
function printaj(){
    print();
}
function inicijal(){
        mojiOglasi();
        ispisiKomentar();
}