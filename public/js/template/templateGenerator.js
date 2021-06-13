function showQuestions(index) {

    const numberType_tag = document.querySelector("#head h1");
    console.log("hello");
    let type = personality[index].type;
    numberType_tag.innerHTML = type;
    console.log(numberType_tag);

    const name_tag = document.querySelector("#first .container h2");
    let name = personality[index].name;
    name_tag.innerHTML = name;
    console.log(name_tag);

    const growth_tag = document.querySelector(".container .growth");
    let growth = personality[index].growth;
    growth_tag.innerHTML = growth;
    console.log(growth_tag);

    const strengths_tag = document.querySelector(".container .strength");
    let strength = personality[index].strengths;
    strengths_tag.innerHTML=strength;
    console.log(strengths_tag);

    const weaknesses_tag = document.querySelector(".container .weaknesses");
    let weaknesses = personality[index].weaknesses;
    weaknesses_tag.innerHTML=weaknesses;
    console.log(weaknesses_tag);

    const traits_tag = document.querySelector("#second .container p");
    let traits=personality[index].traits;
    traits_tag.innerHTML=traits;
    console.log(traits_tag);
    
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

    const relationPro_tag = document.querySelector("#third .container .pro");
    let relationPro = personality[index].relationPro;
    relationPro_tag.innerHTML=relationPro;
    console.log(relationPro_tag);

    const relationRomantic_tag = document.querySelector("#third .container .romantic");
    let relationRomantic = personality[index].relationRomantic;
    relationPro_tag.innerHTML=relationRomantic;
    console.log(relationRomantic_tag);
    
    // const overview_tag = document.querySelector("********");
    // let overview = personality[index].overview;


}
showQuestions(0);