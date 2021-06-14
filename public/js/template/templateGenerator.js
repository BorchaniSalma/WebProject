

function showQuestions(index) {

    console.log("this is the index from show question "+ index);
    const numberType_tag = document.querySelector("#header h1");
    let type = personalityArrayChaffa[index].type;
    numberType_tag.innerHTML = type;
    console.log(numberType_tag);

    const name_tag = document.querySelector("#first .container h2");
    let name = personalityArrayChaffa[index].name;
    name_tag.innerHTML = name;
    console.log(name_tag);

    const description_tag = document.querySelector("#first .container p");
    let description = personalityArrayChaffa[index].description;
    description_tag.innerHTML = description;
    console.log(description_tag);

    const growth_tag = document.querySelectorAll(".container .growth li");
    for(let i=0;i<4;i++)
    {growth_tag[i].innerHTML = personalityArrayChaffa[index].growth[i];}

    const strengths_tag = document.querySelectorAll(".container .strength li");
    for(let i=0;i<4;i++)
    {strengths_tag[i].innerHTML = personalityArrayChaffa[index].strengths[i];}

    const weaknesses_tag = document.querySelectorAll(".container .weaknesses li");
    for(let i=0;i<4;i++)
    {weaknesses_tag[i].innerHTML = personalityArrayChaffa[index].weaknesses[i];}
    
    const titre_traits_tag = document.querySelector("#second .container h2");
    let titre_traits=personalityArrayChaffa[index].titretraits;
    titre_traits_tag.innerHTML=titre_traits;
    console.log(titre_traits_tag);

    const traits_tag = document.querySelector("#second .container p");
    let traits=personalityArrayChaffa[index].traits;
    traits_tag.innerHTML = traits;
    console.log(traits_tag);

    const titre_career_tag = document.querySelector("#second .container h3");
    let titre_career=personalityArrayChaffa[index].titrecareers;
    titre_career_tag.innerHTML=titre_career;
    console.log(titre_career_tag);
    
    const careers_tag1 = document.querySelector("#second .container .career1");
    let careers1 = personalityArrayChaffa[index].careers1;
    careers_tag1.innerHTML=careers1;
    console.log(careers_tag1);

    const careers_tag2 = document.querySelector("#second .container .career2");
    let careers2 = personalityArrayChaffa[index].careers2;
    careers_tag2.innerHTML=careers2;
    console.log(careers_tag2);

    const careers_tag3 = document.querySelector("#second .container .career3");
    let careers3 = personalityArrayChaffa[index].careers3;
    careers_tag3.innerHTML=careers3;
    console.log(careers_tag3);

    const titre_relationPro_tag = document.querySelectorAll("#third .container h2");
    let titre_relationPro = personalityArrayChaffa[index].titrePro;
    titre_relationPro_tag[0].innerHTML=titre_relationPro;
    console.log(titre_relationPro_tag[0]);

    const relationPro_tag = document.querySelector("#third .container .pro");
    let relationPro = personalityArrayChaffa[index].relationPro;
    relationPro_tag.innerHTML=relationPro;
    console.log(relationPro_tag);

    const titre_relationRomantic_tag = document.querySelectorAll("#third .container h2");
    let titre_relationRomantic = personalityArrayChaffa[index].titreRomantic;
    titre_relationRomantic_tag[1].innerHTML=titre_relationRomantic;
    console.log(titre_relationRomantic_tag[1]);

    const relationRomantic_tag = document.querySelector("#third .container .romantic");
    let relationRomantic = personalityArrayChaffa[index].relationRomantic;
    relationRomantic_tag.innerHTML=relationRomantic;
    console.log(relationRomantic_tag);

    const titre_overview_tag = document.querySelector("#third h3");
    let overview_tag = personalityArrayChaffa[index].titreOverview;
    titre_overview_tag.innerHTML=overview_tag;
    console.log(titre_overview_tag);
    
    
}

showQuestions(document.cookie-1);