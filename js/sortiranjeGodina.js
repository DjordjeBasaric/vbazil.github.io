


function sortirajGodine(Niz){
    let NizNovi= JSON.parse(localStorage.getItem(Niz));
    for(let i=0;i<NizNovi.length;i++){
        for(let j=0; j<NizNovi.length;j++){
            if(NizNovi[i].godiste > NizNovi[j].godiste){
                let temp = NizNovi[i];
                NizNovi[i] = NizNovi[j];
                NizNovi[j] = temp;
            }
        }
    }
    localStorage.setItem(Niz, JSON.stringify(NizNovi))
    window.location.reload();
}

function sortirajIme(Niz){
    let NizNovi= JSON.parse(localStorage.getItem(Niz));
    for(let i=0;i<NizNovi.length;i++){
        for(let j=0; j<NizNovi.length;j++){
            if(NizNovi[i].ime > NizNovi[j].ime){
                let temp = NizNovi[i];
                NizNovi[i] = NizNovi[j];
                NizNovi[j] = temp;
            }
        }
    }
    localStorage.setItem(Niz, JSON.stringify(NizNovi))
    window.location.reload();
}

function inicijalizuj(Niz, init, tip){
    switch(tip){
        case 'pas':{
            let nizPasa= [{
                ime : "Labrador Dzeki",
                godiste : 2021,
                tezina : "2kg",
                slika : "slike/labrador1.jpeg",
                link : "labrador-opis_EN.html"
            },
            {
                ime:"Samojed Maza",
                godiste : 2021,
                tezina : "4kg",
                slika : "slike/samojed3.jpeg",
                link: "samojed-opis_EN.html"
            },
            {
                ime:"Pudla Pudlica",
                godiste : 2022,
                tezina: "1kg",
                slika: "slike/pudla1.jpeg",
                link: "pudla-opis_EN.html"
            }
            
            ]
            localStorage.setItem(Niz, JSON.stringify(nizPasa));
            
            localStorage.setItem(init, "1");
            break;
        }
        case 'macka':{
            let nizPasa= [{
                ime : "Norveska Mica",
                godiste : 2019,
                tezina : "7kg",
                slika : "slike/norveska1.jpeg",
                link : "norveska-opis_EN.html"
            },
            {
                ime:"Ruska Leonardo",
                godiste : 2020,
                tezina : "5kg",
                slika : "slike/ruska1.jpeg",
                link: "ruska-opis_EN.html"
            },
            {
                ime:"Skotska Cica",
                godiste : 2021,
                tezina: "3kg",
                slika: "slike/skotska1.png",
                link: "skotska-opis_EN.html"
            }
            
            ]
            localStorage.setItem(Niz, JSON.stringify(nizPasa));
            
            localStorage.setItem(init, "1");
            break;
        }
        case 'ptica': {
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
            
            localStorage.setItem(init, "1");
            break;
        }
    }
}


function ispisNiza(ispisNiz, initZivotinja, TipZivotinje, OglasTip){
    if(localStorage.getItem(initZivotinja) == null){
        inicijalizuj(ispisNiz, initZivotinja, TipZivotinje);
    }
    let Niz1 = JSON.parse(localStorage.getItem(ispisNiz));
    $(document).ready(function(){
        for(let i=0;i<Niz1.length;i++){
            $(OglasTip).append(
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
}


function pretrazi(niz)
{
    let nizPasa = JSON.parse(localStorage.getItem(niz));
    let pretraga = document.getElementById("pretraga").value;

    for (let i = 0; i < nizPasa.length; i++)
    {
        document.getElementById(nizPasa[i].ime).style.display = "block"; 
    }

    
    if (pretraga != "")
    {
        for (let i = 0; i < nizPasa.length; i++)
        {
            let jednako = true;

            for (let j = 0; j < pretraga.length && j < nizPasa[i].ime.length; j++)
            {
                if (pretraga[j] != nizPasa[i].ime[j] && pretraga[j] != nizPasa[i].godiste) 
                {
                    jednako = false;
                    break;
                }
            }

            if (!jednako)
            {
                document.getElementById(nizPasa[i].ime).style.display = "none";
            }
        }
    }
}


