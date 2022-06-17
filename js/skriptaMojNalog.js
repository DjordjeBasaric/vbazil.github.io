

let Oglas ={
    ime : "",
    opis : "",
    telefon : "",
    tip: ""

};



function obrisiOglas(i){
    
    let nizOglasa = JSON.parse(localStorage.getItem("nizOglasa"));
    nizOglasa.splice(i, 1);
    let nizKomentara = JSON.parse(localStorage.getItem("nizKomentara"));
    
    if(nizKomentara!=null){
        for(let j=0; j<nizKomentara.length;j++){
            if(nizKomentara[j].indeks == i){
                nizKomentara.splice(j,1);
            }
        }
    }

    localStorage.setItem("nizOglasa", JSON.stringify(nizOglasa))
    localStorage.setItem("nizKomentara", JSON.stringify(nizKomentara))
    window.location.reload();
}

function mojiKomentari(){
    $(document).ready(function(){
    let nizIndeksaTemp = [];
    let nizKomentara = JSON.parse(localStorage.getItem("nizKomentara"));
    let nizOglasa = JSON.parse(localStorage.getItem("nizOglasa"));
    let nizIndeksa = [];
    
    if(nizOglasa!=null && nizKomentara!=null){
        for(let i=0;i<nizKomentara.length;i++){
            if(nizKomentara[i].indeks>=1000 && nizKomentara[i].indeks<=1002){
                mojiStaticniKomentari(nizKomentara[i]);
            }
            else{
                $("#komentari")
                    .append($("<div class='bg-white mx-3 p-4 col-sm-12' style='margin:5px'></div>")
                        .append($("<div class='d-flex align-items-end mb-3 mt-n4 ml-n4' style='margin:10px' ></div>")
                            .append($("<img class='img-fluid' style='margin:10px; width: 80px; height: 80px;' alt=''>").attr("src", "slike/"+ nizOglasa[nizKomentara[i].indeks].tip +".jpeg")
                                
                            )
                        
                            .append($("<div class='ml-3'></div>")
                            .append($("<h5></h5>").append(nizOglasa[nizKomentara[i].indeks].ime))
                            .append($("<i></i>").append(nizKomentara[i].datum))
                        )
                        )
                        .append($("<div></div>")
                            .append(($("<p class='m-0'></p>").append(nizKomentara[i].komentar))
                        )
                    )
                )
            }    
        }
    }


    
})


}




function mojiStaticniKomentari(komentar){
    if(komentar.indeks==1000){
        $("#komentari")
        .append($("<div class='bg-white mx-3 p-4 col-sm-12' style='margin:5px'></div>")
            .append($("<div class='d-flex align-items-end mb-3 mt-n4 ml-n4' style='margin:10px' ></div>")
                .append($("<img class='img-fluid' style='margin:10px; width: 80px; height: 80px;' alt=''>").attr("src", "slike/pas.jpeg")
                    
                )
            
                .append($("<div class='ml-3'></div>")
                .append($("<h5></h5>").append("Labrador Dzeki"))
                .append($("<i></i>").append(komentar.datum))
            )
            )
            .append($("<div></div>")
                .append(($("<p class='m-0'></p>").append(komentar.komentar))
            )
        )
    )
    }
    else if(komentar.indeks==1001){
        $("#komentari")
        .append($("<div class='bg-white mx-3 p-4 col-sm-12' style='margin:5px'></div>")
            .append($("<div class='d-flex align-items-end mb-3 mt-n4 ml-n4' style='margin:10px' ></div>")
                .append($("<img class='img-fluid' style='margin:10px; width: 80px; height: 80px;' alt=''>").attr("src", "slike/macka.jpeg")
                    
                )
            
                .append($("<div class='ml-3'></div>")
                .append($("<h5></h5>").append("Ruska plava macka"))
                .append($("<i></i>").append(komentar.datum))
            )
            )
            .append($("<div></div>")
                .append(($("<p class='m-0'></p>").append(komentar.komentar))
            )
        )
    )
    }
    else if(komentar.indeks==1002){
        $("#komentari")
        .append($("<div class='bg-white mx-3 p-4 col-sm-12' style='margin:5px'></div>")
            .append($("<div class='d-flex align-items-end mb-3 mt-n4 ml-n4' style='margin:10px' ></div>")
                .append($("<img class='img-fluid' style='margin:10px; width: 80px; height: 80px;' alt=''>").attr("src", "slike/ptica.jpeg")
                    
                )
            
                .append($("<div class='ml-3'></div>")
                .append($("<h5></h5>").append("Orao Oro"))
                .append($("<i></i>").append(komentar.datum))
            )
            )
            .append($("<div></div>")
                .append(($("<p class='m-0'></p>").append(komentar.komentar))
            )
        )
    )
    }



}



function mojiOglasi(){
    $(document).ready(function(){
        
        
        let nizOglasa = JSON.parse(localStorage.getItem("nizOglasa"));

        for(let i=1;i<nizOglasa.length;i++){
        
            $("#oglasi").append(
                $("<div></div>").attr("class", "col-md-6 col-lg-4 mb-4").append(
                    $("<div></div").attr("class", "d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5")
                    .append($("<img>").attr("class", "d-flex justify-content-center display-3 font-weight-normal text-secondary mb-3 slika")
                        .attr("src", "slike/" + nizOglasa[i].tip+ ".jpeg").css({
                            "width" : "100px",
                            "height": "100px",
                            "margin-left" : "70px",
                            
                        }))
                    .append($("<h3></h3>").attr("class", "mb-3").append(nizOglasa[i].ime))
                    .append($("<p></p>").append(nizOglasa[i].opis))
                    .append($("<h6></h6>").append("Broj telefona: ").append(nizOglasa[i].telefon))
                    .append($("<button></button").attr("class", "btn btn-primary").attr("type", "submit").attr("id", "obrisiSvojOglas").append("Obrisi oglas").attr("onclick", "obrisiOglas(" + i + ")"  ))
                )
            )
        }
        //<button class="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>

            
        

    });


    
}
function inicijalizuj(){
    $(document).ready(function(){
    mojiOglasi();
    mojiKomentari();
    })
}