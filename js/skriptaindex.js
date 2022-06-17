
function inicijalizuj(Niz){
    
    let nizPasa= [{
        ime : "Mali Aleksandar",
        godiste : 2020,
        tezina : "7kg",
        slika : "slike/papagaj1.jpeg",
        link : "papagaj-opis_EN.html"
    },
    {
        ime:"Kanarinac Kani",
        godiste : 2021,
        tezina : "0.3kg",
        slika : "slike/kanarinac1.jpeg",
        link: "kanarinac-opis_EN.html"
    },
    {
        ime:"Ara Rara",
        godiste : 2019,
        tezina: "2kg",
        slika: "slike/ara1.jpeg",
        link: "ara-opis_EN.html"
    }
    ]
    localStorage.setItem(Niz, JSON.stringify(nizPasa));
}




function mojiOglasi(){
    $(document).ready(function(){
        
         inicijalizuj("nizPtica")
        let Niz1 = JSON.parse(localStorage.getItem("nizPtica"));
        $(document).ready(function(){
            for(let i=0;i<Niz1.length;i++){
                $("#nizPtica").append(
                    $("<div></div>").attr("class", "col-md-6 col-lg-4 mb-4").append(
                        $("<div></div").attr("class", "d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5")
                        .append($("<img></img>").attr("class", "display-3 font-weight-normal text-secondary mb-3")
                            .attr("src", Niz1[i].slika).css({
                                "width" : "250px",
                                "height": "250px",
                            }))
                        .append($("<h4></h4>").append(Niz1[i].ime))
                        .append($("<div></div>").append("Godiste: " + Niz1[i].godiste))
                        .append($("<div></div>").append("Tezina: " + Niz1[i].tezina))
                        .append($("<a></a>").attr("class", "text-uppercase font-weight-bold").attr("href", Niz1[i].link).append("DETALJAN OPIS"))   
                    ).attr("id", Niz1[i].ime)      
                )
            }
            
        });



        let nizOglasa = JSON.parse(localStorage.getItem("nizOglasa"));
        if(nizOglasa != null){
            let j;
            for(let i=nizOglasa.length-1, j = 0 ;j<3;i--,j++){
                if(i!=0){
                    $("#3NovaOglasa").append(
                        $("<div></div>").attr("class", "col-md-6 col-lg-4 mb-4").append(
                            $("<div></div").attr("class", "d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5")
                            .append($("<img>").attr("class", "d-flex justify-content-center display-3 font-weight-normal text-secondary mb-3 slika")
                                .attr("src", "slike/" + nizOglasa[i].tip + ".jpeg").css({
                                    "width" : "100px",
                                    "height": "100px",
                                    "margin-left" : "70px",
                                    
                                }))
                            .append($("<h3></h3>").attr("class", "mb-3").append(nizOglasa[i].ime))
                            .append($("<p></p>").append(nizOglasa[i].opis))
                            .append($("<h6></h6>").append("Broj telefona: ").append(nizOglasa[i].telefon))
                        )
                    )  
                } 
            }
        }
            
        

    }); 
}