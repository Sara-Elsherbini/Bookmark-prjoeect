
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var submit = document.getElementById("submit");
var siteAlert = document.getElementById("nameError");
var siteAlert = document.getElementById("urlError");




submit.addEventListener("click", addSite);

var siteList ;

if(localStorage.getItem("ourSite")==null)
{
siteList=[];

}
else{
  siteList=JSON.parse(localStorage.getItem("ourSite"));
  displaySite();
}

function addSite() {
    var site =
    {
        name: siteName.value,
        url: siteUrl.value
    };

    if (siteName.value !=""&&siteUrl.value!=""){
        siteList.push(site);
        localStorage.setItem("ourSite",JSON.stringify(siteList) );
        displaySite();
        clearSite()
    }
    
}
 

function displaySite()
{
    var cartoona = "";
    for (var i = 0; i < siteList.length; i++) {
        cartoona += `<div class=" d-flex list" >

        <h2>${siteList[i].name}</h2>
        <span >
        <a class="btn btn-primary " href="${siteUrl.value} " target="_blank">visit</a>
        <button onclick=" deleteProduct(${i})" class="btn btn-danger">Delete</button>
        </span>
        </div>`
    }
    document.getElementById("bookmarkList").innerHTML = cartoona;
}

function clearSite()
{
siteName.value="";
siteUrl.value="";
}

/* var siteCotainer=
[
    {name:'toshiba',url:'google.com'},
    {name:'nokia',url:'yahoo.com'},
    {name:'lenevo',url:'non.com'}

] */

function deleteProduct(index)
{
siteList.splice(index,1);
localStorage.setItem("ourSite",JSON.stringify(siteList) )
displaySite();
console.log(siteList);
}

 function validateName(Name) {
    var regex = /[a-z|A-Z]+$/;
    if (regex.test(Name) == true) {
        siteName.classList.remove("is-invalid");
        siteName.classList.add("is-valid");
        nameError.classList.replace("d-block","d-none")
    }
    else
    {
        siteName.classList.remove("is-valid");
        siteName.classList.add("is-invalid");
        nameError.classList.replace("d-none","d-block")
    }
}

     siteName.addEventListener("keyup",function(){
    validateName(siteName.value);
}) 


function validateUrl(Url) {
    var regex = /.com$/;
    if (regex.test(Url) == true) {
        siteUrl.classList.remove("is-invalid");
        siteUrl.classList.add("is-valid");
        urlError.classList.replace("d-block","d-none")
    }
    else
    {
        siteUrl.classList.remove("is-valid");
        siteUrl.classList.add("is-invalid");
        urlError.classList.replace("d-none","d-block");
    }
}

     siteUrl.addEventListener("keyup",function(){
    validateUrl(siteUrl.value);
}) 