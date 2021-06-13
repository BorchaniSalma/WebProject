function showQuestions(index) {

    const numberType_tag = document.querySelector("#head h1");
    let type = personality[index].type;
    numberType_tag.innerHTML = type;
    console.log(numberType_tag);

    const name_tag = document.querySelector("#first .container h2");
    let name = personality[index].name;
    name_tag.innerHTML = name;
    console.log(name_tag);

    const description_tag = document.querySelector("#first .container p");
    let description = personality[index].description;
    description_tag.innerHTML = description;
    console.log(description_tag);

    const growth_tag = document.querySelector(".container .growth");
    let growth = personality[index].growth;
    growth_tag.innerHTML = growth;
    console.log(growth_tag);
    
    // console.log("hello");

    const strengths_tag = document.querySelector(".container .strength");
    let strength = personality[index].strengths;
    strengths_tag.innerHTML=strength;
    console.log(strengths_tag);

    const weaknesses_tag = document.querySelector(".container .weaknesses");
    let weaknesses = personality[index].weaknesses;
    weaknesses_tag.innerHTML=weaknesses;
    console.log(weaknesses_tag);

    const titre_traits_tag = document.querySelector("#second .container h2");
    let titre_traits=personality[index].titretraits;
    titre_traits_tag.innerHTML=titre_traits;
    console.log(titre_traits_tag);

    const traits_tag = document.querySelector("#second .container p");
    let traits=personality[index].traits;
    traits_tag.innerHTML=traits;
    console.log(traits_tag);

    const titre_career_tag = document.querySelector("#second .container h3");
    let titre_career=personality[index].titrecareers;
    titre_career_tag.innerHTML=titre_career;
    console.log(titre_career_tag);
    
    const careers_tag1 = document.querySelector("#second .container .career1");
    let careers1 = personality[index].careers1;
    careers_tag1.innerHTML=careers1;
    console.log(careers_tag1);

    const careers_tag2 = document.querySelector("#second .container .career2");
    let careers2 = personality[index].careers2;
    careers_tag2.innerHTML=careers2;
    console.log(careers_tag2);

    const careers_tag3 = document.querySelector("#second .container .career3");
    let careers3 = personality[index].careers3;
    careers_tag3.innerHTML=careers3;
    console.log(careers_tag3);

    const titre_relationPro_tag = document.querySelectorAll("#third .container h2");
    let titre_relationPro = personality[index].titrePro;
    titre_relationPro_tag[0].innerHTML=titre_relationPro;
    console.log(titre_relationPro_tag[0]);

    const relationPro_tag = document.querySelector("#third .container .pro");
    let relationPro = personality[index].relationPro;
    relationPro_tag.innerHTML=relationPro;
    console.log(relationPro_tag);

    const titre_relationRomantic_tag = document.querySelectorAll("#third .container h2");
    let titre_relationRomantic = personality[index].titreRomantic;
    titre_relationRomantic_tag[1].innerHTML=titre_relationRomantic;
    console.log(titre_relationRomantic_tag[1]);

    const relationRomantic_tag = document.querySelector("#third .container .romantic");
    let relationRomantic = personality[index].relationRomantic;
    relationRomantic_tag.innerHTML=relationRomantic;
    console.log(relationRomantic_tag);

    const titre_overview_tag = document.querySelector("#third h3");
    let overview_tag = personality[index].titreoverview;
    titre_overview_tag.innerHTML=overview_tag;
    console.log(titre_overview_tag);
    
    const overview_tag1 = document.querySelector(".row .overview1");
    let overview1 = personality[index].overview1;
    overview_tag1.innerHTML=overview1;
    console.log(overview_tag1);

    const overview_tag2 = document.querySelector(".row .overview2");
    let overview2 = personality[index].overview2;
    overview_tag2.innerHTML=overview2;
    console.log(overview_tag2);
}
showQuestions(1);