




let nizOglasa =[{
    ime : "",
        opis : "",
        telefon : "",
        tip: ""
}];

function ucitaj(){
    
    let Oglas ={
        ime : "",
        opis : "",
        telefon : "",
        tip: ""
    
    };

    if (localStorage.getItem("nizOglasa") == null)
    {
        localStorage.setItem("nizOglasa", JSON.stringify(nizOglasa));
    }
    else nizOglasa = JSON.parse(localStorage.getItem("nizOglasa"));

    Oglas.ime = document.getElementById("imeljubimca").value;
    Oglas.opis = document.getElementById("opis").value;
    Oglas.telefon = document.getElementById("brojtelefona").value;
    Oglas.tip = document.getElementById("tip").value;

    nizOglasa.push(Oglas);

    localStorage.setItem("nizOglasa", JSON.stringify(nizOglasa));
    localStorage.setItem("kliknuo", "1");
       
}

