//my information
document.querySelector("#myInformation>h2").innerHTML = "Jaime Burbano";
document.querySelector("#myInformation>figure>img").src = "img/myphoto.jpeg";
document.querySelector("#myInformation>p").innerHTML = "Aspirante a dev morando em Campinas";


//singer's information
document.querySelector("#titleOfWork").innerHTML = "Exercício sobre querySelector";
document.querySelector("#nameSinger").innerHTML = "Rosalía";

// her photo
let photo = document.querySelector("#photoRosalia");
photo.src = "https://s2.glbimg.com/EG-tsH24sIhtgoUJShwgwtGX7ok=/smart/e.glbimg.com/og/ed/f/original/2021/09/29/rosalia.jpg";
photo.alt = "Rosalia com vestido vermelho em gala";

// her short Bio
document.querySelector("p.shortBio").innerHTML = "Cantora espanhola, solteira, nascida em 1993";

//professional information table
document.querySelector("#captionTable").innerHTML = "Resumo Profissional de Rosalía";
document.querySelector("#tableHead").innerHTML = "Informações de Rosalía";

document.querySelector("#genre>th").setAttribute("scope", "row");
document.querySelector("#genre>th").innerHTML = "Gênero";
document.querySelector("#genre>td").innerHTML = "Flamenco, música urbana, pop";

document.querySelector("#links>th").setAttribute("scope","row");
document.querySelector("#links>th").innerHTML = "Links";
document.querySelector("#wikiRosalia").innerHTML = "Wikipedia de Rosalía";
document.querySelector("#wikiRosalia").setAttribute("href", "https://es.wikipedia.org/wiki/Rosal%C3%ADa_(cantante)");
document.querySelector("#wikiRosalia").setAttribute("target", "_blank");
document.querySelector("#youtubeRosalia").innerHTML = "Youtube de Rosalía";
document.querySelector("#youtubeRosalia").setAttribute("href", "https://www.youtube.com/channel/UCQt9awGIFZeldFsATZNeJag");
document.querySelector("#youtubeRosalia").setAttribute("target", "_blank");
document.querySelector("#instaRosalia").innerHTML = "Instagram de Rosalía";
document.querySelector("#instaRosalia").setAttribute("href", "https://www.instagram.com/rosalia.vt/");
document.querySelector("#instaRosalia").setAttribute("target", "_blank");

document.querySelector("#myFavs>th").innerHTML = "Minhas canções favoritas";
document.querySelector("#malamente").innerHTML = "Malamente";
document.querySelector("#malamente").setAttribute("href","https://www.youtube.com/watch?v=Rht7rBHuXW8");
document.querySelector("#malamente").setAttribute("target", "_blank");
document.querySelector("#yoxti").innerHTML = "Yo x ti, tú por mi";
document.querySelector("#yoxti").setAttribute("href","https://www.youtube.com/watch?v=2j3x0VYnehg");
document.querySelector("#yoxti").setAttribute("target", "_blank");
document.querySelector("#pienso").innerHTML = "Pienso en tu mirá";
document.querySelector("#pienso").setAttribute("href", "https://www.youtube.com/watch?v=p_4coiRG_BI");
document.querySelector("#pienso").setAttribute("target","_target");
document.querySelector("#diMi").innerHTML = "Di mi nombre";
document.querySelector("#diMi").setAttribute("href", "https://www.youtube.com/watch?v=mUBMPaj0L3o");
document.querySelector("#diMi").setAttribute("target", "_blank");
