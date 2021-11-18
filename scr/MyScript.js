//NavBar Scroll
window.onbeforeunload = function(){
  window.scrollTo(0,0);
}

window.onload= function(){ 
  StartingMediaQueries();
  MediaQueries();
  SE.style.transform = `translate(0px,${4}vh)`;
  resume.style.transform = `translate(0px,${4}vh)`;
  var WorkHeight = (Descriptionlist.length * 160) + 80;
  Work.style.setProperty(`--workheight`,`${WorkHeight}vh`);
  PageAnimation();
}

//initiate the PageLoadAnimation
var leftsection = document.getElementById("leftsection");
var Hellotxt = document.getElementById("Hellotxt");
var resume = document.getElementById("resume");
var SE = document.getElementById("SE");
var txt = "Hi, I'm Han Qin Ding";
var finishedanimation = true;
var txtspeed = 50;
var count = 0;

function PageAnimation() {
  if (count  < txt.length) {
    if(txt.charAt(count) == ','){
      Hellotxt.innerHTML += (txt.charAt(count) + "<br/>");
      txtspeed = 100;
    }
    else{
      Hellotxt.innerHTML += txt.charAt(count);
      txtspeed = 50;
    }     
    count++;
    setTimeout(PageAnimation, txtspeed);
  }
  else{
    SE.style.transform = `translate(0px,${0}vh)`;
    SE.style.opacity = "1";
    resume.style.transform = `translate(0px,${0}vh)`;
    resume.style.opacity = "1";
    leftsection.style.opacity = "1";
    leftsection.style.setProperty("--afterheight","15vh");
    var childdiv = leftsection.getElementsByTagName('a');
    for(var x=0; x<childdiv.length; x++){
      childdiv[x].style.opacity ="1";
      childdiv[x].style.margin = "10% 0 10% 0";
    }
  }
}

leftsection.addEventListener('transitionend', function(){
  var childdiv = leftsection.getElementsByTagName('a');
  for(var x=0; x<childdiv.length; x++){ 
    if((getComputedStyle(childdiv[x]).marginTop == "5px" && getComputedStyle(childdiv[x]).transition != "250ms") || (window.innerWidth <=768))
      childdiv[x].style.transition = "250ms";
  }
});






//About Section
function Logos(id,BigAttributes,MediumAttributes,SmallAttributes,leftright,updown){
  this.MediumAttributes = MediumAttributes;
  this.SmallAttributes = SmallAttributes;
  this.BigAttributes = BigAttributes;
  this.leftright = leftright;
  this.updown = updown;
  this.id = id;
}

var aboutmedesc = document.getElementById("aboutmedesc");
var Skillslogoz = document.getElementById("Skillslogo");
var AboutSection = document.getElementById("About");
var Aboutme = document.getElementById("Aboutme");

var Designdescription = "I also enjoy drawing and sketching during my free time. I like to design my own project layouts and sprites. I always go for simple content structure, clean design and engaging  interaction";
var DesignLogohtml = "<img src='img/blenderIcon.png' alt='Blender' id='Blender' style='height:auto; opacity: 0.5;transform: rotate(10deg);'><img src='img/XDIcon2.png' alt='UX' id='UX' style='height:auto; opacity: 0.5;transform: rotate(355deg);'><img src='img/PhotoshopIcon2.png'  alt='Photoshop' id='PS' style='height:auto; opacity: 0.5;transform: rotate(5deg);'><img src='img/VisualStudioIcon.png'  alt='VisualStudio' id='VS' style='height:auto; opacity: 0.5;transform: rotate(350deg);'>";
var SDdescription = "I enjoy building softwares from scratch and bringing my ideas to life on the internet. With a strong belief in Continuous improvement, I'm constantly pushing myself to learn new technologies like<span style='color: #93C854; font-weight:700;'> Android Studio</span>,<span style='color: #03B9ED; font-weight:700;'> Xcode </span> and <span style='color:#3A3A3A; font-weight:700;'> Unity</span>";
var SDlogohtml = "<img src='img/androidstudioicon.png' alt='AndroidStudio' id='Android' style='height:auto; opacity: 0.5;transform: rotate(10deg);'><img src='img/unityicon.png' alt='Unity' id='Unity'style='height:auto; opacity: 0.5;transform: rotate(0deg);'><img src='img/idleicon.png' alt='Idle' id='Idle'style='height:auto; opacity: 0.5;transform: rotate(10deg);'><img src='img/Xcodeicon.png' alt='Xcode' id='Xcode' style='height:auto; opacity: 0.5;transform: rotate(350deg);'>";
aboutmedesc.innerHTML = SDdescription;
Skillslogoz.innerHTML = SDlogohtml;

var AndroidStudio = new Logos("Android",["19vmax","220px","-100px","-280px"],["39vmin","263px","-50px","-280px"],["39vmin","239px","-76px","-280px"],"left","top");
var Unity = new Logos("Unity",["17vmax","200px","10%","47vmin"],["22vmax","261px","-10%","21vmin"],["22vmax","229px","-15%","21vmin"],"left","margin-top");
var Idle = new Logos("Idle",["15vmax","200px", "8%","-21vmin"],["15vmax","218px","-20%","-21vmin"],["15vmax","196px","-27%","-21vmin"],"right","margin-top");
var Xcode = new Logos("Xcode",["18vmax","240px","-5%","42.5vh"],["18vmax","265px","-15%","42.5vh"],["18vmax","242px","-30%","43.5vh"],"right","margin-top");

var Blender = new Logos("Blender",["256px","220px","137px","-430px"],["39vmin","263px","-134px","-651px"],["39vmin","263px","-134px","-651px"],"right","bottom");
var UX = new Logos("UX",["237px","200px","-50px","-592px"],["22vmax","261px","-10%","-5vmin"],["22vmax","211px","-10%","5vmin"],"left","bottom");
var PS = new Logos("PS",["239px","200px","-60px","-278px"],["15vmax","218px","-20%","3vmin"],["15vmax","186px","-25%","3vmin"],"right","top");
var VS = new Logos("VS",["219px","240px","100px","-339px"],["18vmax","265px","-6%","33.5vh"],["18vmax","209px","-6%","33.5vh"],"left","top");
var Skillslogo = [AndroidStudio,Unity,Idle,Xcode,Blender,UX,PS,VS];


function MediaQueries(){
  var y = window.matchMedia("(max-width: 768px)");
  var z = window.matchMedia("(max-width: 480px)");
  y.onchange = (b) => {
      //console.log(window.innerWidth)
      if(b.matches && window.innerWidth>480){
          for(var i=0; i<Skillslogo.length; i++){
            if(document.getElementById(Skillslogo[i].id)){
            document.getElementById(Skillslogo[i].id).style[Skillslogo[i].leftright] = Skillslogo[i].MediumAttributes[2];
            document.getElementById(Skillslogo[i].id).style[Skillslogo[i].updown] = Skillslogo[i].MediumAttributes[3];
            document.getElementById(Skillslogo[i].id).style.minWidth = Skillslogo[i].MediumAttributes[1];
            document.getElementById(Skillslogo[i].id).style.width = Skillslogo[i].MediumAttributes[0];
            }
          }
      }
    else{      //This is a maxwidth — 1536px or lesser
        for(var i=0; i<Skillslogo.length; i++){
          if(document.getElementById(Skillslogo[i].id)){
          document.getElementById(Skillslogo[i].id).style[Skillslogo[i].leftright] = Skillslogo[i].BigAttributes[2];
          document.getElementById(Skillslogo[i].id).style[Skillslogo[i].updown] = Skillslogo[i].BigAttributes[3];
          document.getElementById(Skillslogo[i].id).style.minWidth = Skillslogo[i].BigAttributes[1];
          document.getElementById(Skillslogo[i].id).style.width = Skillslogo[i].BigAttributes[0];
        }
        }
      }
    }
  z.onchange = (c) => {
    if (c.matches){//This is a minwidth — 480px or lesser
      for(var i=0; i<Skillslogo.length; i++){
        if(document.getElementById(Skillslogo[i].id)){
        document.getElementById(Skillslogo[i].id).style[Skillslogo[i].leftright] = Skillslogo[i].SmallAttributes[2];
        document.getElementById(Skillslogo[i].id).style[Skillslogo[i].updown] = Skillslogo[i].SmallAttributes[3];
        document.getElementById(Skillslogo[i].id).style.minWidth = Skillslogo[i].SmallAttributes[1];
        document.getElementById(Skillslogo[i].id).style.width = Skillslogo[i].SmallAttributes[0];
        }
      }
    }
    else if(window.innerWidth>480 && window.innerWidth <= 768){
      console.log("hit");
      for(var i=0; i<Skillslogo.length; i++){
        if(document.getElementById(Skillslogo[i].id)){
        document.getElementById(Skillslogo[i].id).style[Skillslogo[i].leftright] = Skillslogo[i].MediumAttributes[2];
        document.getElementById(Skillslogo[i].id).style[Skillslogo[i].updown] = Skillslogo[i].MediumAttributes[3];
        document.getElementById(Skillslogo[i].id).style.minWidth = Skillslogo[i].MediumAttributes[1];
        document.getElementById(Skillslogo[i].id).style.width = Skillslogo[i].MediumAttributes[0];
        }
      }
    }  
    else{  
      console.log("biger sial");    //This is a maxwidth — 1536px or lesser
      for(var i=0; i<Skillslogo.length; i++){
        if(document.getElementById(Skillslogo[i].id)){
        document.getElementById(Skillslogo[i].id).style[Skillslogo[i].leftright] = Skillslogo[i].BigAttributes[2];
        document.getElementById(Skillslogo[i].id).style[Skillslogo[i].updown] = Skillslogo[i].BigAttributes[3];
        document.getElementById(Skillslogo[i].id).style.minWidth = Skillslogo[i].BigAttributes[1];
        document.getElementById(Skillslogo[i].id).style.width = Skillslogo[i].BigAttributes[0];
      }
      }
    }
  }
}
  
function StartingMediaQueries(){
  if(window.innerWidth>768){
    //console.log("1536px");
    for(var i=0; i<Skillslogo.length; i++){
      if(document.getElementById(Skillslogo[i].id)){
      document.getElementById(Skillslogo[i].id).style.width = Skillslogo[i].BigAttributes[0];
      document.getElementById(Skillslogo[i].id).style.minWidth = Skillslogo[i].BigAttributes[1];
      document.getElementById(Skillslogo[i].id).style[Skillslogo[i].leftright] = Skillslogo[i].BigAttributes[2];
      document.getElementById(Skillslogo[i].id).style[Skillslogo[i].updown] = Skillslogo[i].BigAttributes[3];
      }
    }
  }
  else if(window.innerWidth <=768 && window.innerWidth >480){
    for(var i=0; i<Skillslogo.length; i++){
      if(document.getElementById(Skillslogo[i].id)){
      document.getElementById(Skillslogo[i].id).style.width = Skillslogo[i].MediumAttributes[0];
      document.getElementById(Skillslogo[i].id).style.minWidth = Skillslogo[i].MediumAttributes[1];
      document.getElementById(Skillslogo[i].id).style[Skillslogo[i].leftright] = Skillslogo[i].MediumAttributes[2];
      document.getElementById(Skillslogo[i].id).style[Skillslogo[i].updown] = Skillslogo[i].MediumAttributes[3];
      }
    }
  }
  else{
    for(var i=0; i<Skillslogo.length; i++){
      if(document.getElementById(Skillslogo[i].id)){
      document.getElementById(Skillslogo[i].id).style[Skillslogo[i].leftright] = Skillslogo[i].SmallAttributes[2];
      document.getElementById(Skillslogo[i].id).style[Skillslogo[i].updown] = Skillslogo[i].SmallAttributes[3];
      document.getElementById(Skillslogo[i].id).style.minWidth = Skillslogo[i].SmallAttributes[1];
      document.getElementById(Skillslogo[i].id).style.width = Skillslogo[i].SmallAttributes[0];
      }
    }
  }
}
    

function SetAboutDescription(){
  if(aboutmedesc.getBoundingClientRect().top >= (0.45*window.innerHeight)){ 
    if(currentaboutme != "SD"){
      Skillslogoz.style.opacity = "0";
      aboutmedesc.style.opacity = "0";
      setTimeout(function(){
        Skillslogoz.innerHTML = SDlogohtml;
        StartingMediaQueries();
        aboutmedesc.innerHTML = SDdescription;
        Skillslogoz.style.opacity = "1";
        aboutmedesc.style.opacity = "1";
      },350);
      currentaboutme = "SD";
    }
  }
  else{
    if(currentaboutme != "Des"){
      Skillslogoz.style.opacity = "0";
      aboutmedesc.style.opacity = "0";
      setTimeout(function(){
        Skillslogoz.innerHTML = DesignLogohtml;
        StartingMediaQueries();
        aboutmedesc.innerHTML = Designdescription;
        Skillslogoz.style.opacity = "1";
        aboutmedesc.style.opacity = "1";
      },350);
      currentaboutme = "Des";
    }
  }
}





//Project Section
function WorkImage(parentid,id, speed ,THisList){
  this.imgobject = document.getElementById(id);
  this.parentid = parentid;
  this.speed = speed;
  THisList.push(this);
}

function WorkDescriptions(title,type,description,ImgID,extra){
  this.description = description;
  this.title = title;
  this.extra = extra;
  this.ImgID = ImgID;
  this.imglist = [];
  this.type = type;
}
var currentProject;
var Descriptionlist = [];
var IMGList = [];
var AOSList = [];
var PFList = [];


//const Preception = new WorkDescriptions("Perception","Personal Project","A unique First person persepctive puzzle game that requires players to think laterally to clear the game.","For this project, I tried to build/design everything by myself from scratch, including the sprites. This project is still currently in the making, playable demo will be shared soon");
const PFostership = new WorkDescriptions("Project Fostership","<p style='color: #fd6264'> Ruby on Rails &nbsp;<p/> • <p style='color: #93C854'>&nbsp; Android Studio <p/>  ","An innovative solution to help foster relationships with groups of people who attend camp/events by breaking the ice.","Fostership","https://github.com/WetDumplings/Project_Fosterships");
const AttackSlime = new WorkDescriptions("Attack on Slime"," <p style='color: #8CD248'>Gamemaker<p/>","A simple top-down bullet hell game that I built for my school project.","AOS","https://github.com/WetDumplings/Attack-on-Slimes");
Descriptionlist.push(PFostership);
Descriptionlist.push(AttackSlime);

const AOS1 = new WorkImage("AOS","AOS1","1.05",AOSList);
const AOS2 = new WorkImage("AOS","AOS2","0.63",AOSList);
const AOS3 = new WorkImage("AOS","AOS3","0.35",AOSList);
const AOS4 = new WorkImage("AOS","AOS4","0.17",AOSList);
const F1 = new WorkImage("Fostership","F1","0.25",PFList);
const F2 = new WorkImage("Fostership","F2","0.55",PFList);
const F3 = new WorkImage("Fostership","F3","0.65",PFList);
const F5 = new WorkImage("Fostership","F5","0.15",PFList);
IMGList.push(AOSList);
IMGList.push(PFList);

var Work_Description = document.getElementById("Work_Description");
var Fostership = document.getElementById("Fostership");
var AOS = document.getElementById("AOS");
var ProjExtra = document.getElementById("ProjExtra").getElementsByTagName('p')[0];
var ProjTitle = document.getElementById("ProjTitle").getElementsByTagName('p')[0];
var ProjType = document.getElementById("ProjType");
var ProjDesc = document.getElementById("ProjDesc").getElementsByTagName('p')[0];



function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return(     
      (bounding.top >=0 && bounding.top <=window.innerHeight) ||
      (bounding.bottom >=0 && bounding.bottom <=window.innerHeight) || 
      (bounding.bottom >= window.innerHeight && bounding.top < 0)  
  );
};

function ScrollAnimation(parentobj, obj,speed,direction){
  var SlideDistance = parseFloat(window.innerHeight-parentobj.getBoundingClientRect().top) * speed;
  if(direction == "x")
    obj.style.transform = `translate(${SlideDistance}px,0px)`;
  else
    obj.style.transform = `translate(0px,-${SlideDistance}px)`;
}

function fixobjectPosition(parentobj,obj,speed,direction){
  if(parseFloat(parentobj.getBoundingClientRect().top) > window.innerHeight)
    obj.style.transform = `translate(0px,0px)`;
  else{
    var newtranslatepos = parseFloat(window.innerHeight + parentobj.offsetHeight)*speed;
    if(direction == "x")
      obj.style.transform = `translate(${newtranslatepos}px,0px)`;
    else
      obj.style.transform = `translate(0px,-${newtranslatepos}px)`;  
  }
}

function SetWorkDescription(){
  var newProject;
  for(var i=0 ;i<Descriptionlist.length; i++){
    if(isInViewport(document.getElementById(Descriptionlist[i].ImgID)))
    newProject = Descriptionlist[i]; 
  }
  if(newProject != null){
    if(newProject != currentProject && currentProject != null){
      currentProject = newProject;
      var childdiv = Work_Description.getElementsByTagName('div');
      for(var x=0; x<childdiv.length; x++){
        childdiv[x].style.opacity="0";
      }
      setTimeout(function(){
        ProjDesc.innerHTML = currentProject.description;
        ProjTitle.innerHTML = currentProject.title;
        if(currentProject.extra!="")
          ProjExtra.innerHTML = `<a   href='${currentProject.extra}'; target='_blank' rel='noopener noreferrer'><svg class='Projxtra'; role='presentation'><use xlink:href='#svg--Github'/> </svg></a>`;
        else
          ProjExtra.innerHTML = "";
        ProjType.innerHTML = currentProject.type;
        for(var x=0; x<childdiv.length; x++){
          childdiv[x].style.opacity="1";
        }
      },300);
    }

    else if(currentProject == null){
      currentProject = newProject;
      ProjDesc.innerHTML = currentProject.description;
      ProjTitle.innerHTML = currentProject.title;
      if(currentProject.extra!="")
        ProjExtra.innerHTML = `<a   href='${currentProject.extra}'; target='_blank' rel='noopener noreferrer'><svg class='Projxtra'; role='presentation'><use xlink:href='#svg--Github'/> </svg></a>`;
      else
        ProjExtra.innerHTML = "";
      ProjType.innerHTML = currentProject.type;
      var childdiv = Work_Description.getElementsByTagName('div');
      for(var x=0; x<childdiv.length; x++){
        childdiv[x].style.opacity="1";
      }
    }
  }
}



//Run the animations/transitions when the user scrolls
var ContactSection = document.getElementById("Contact");
var currentaboutme = "SD";
var prevAboutposition;
var Sidedistance = 0;
window.onscroll = function() {
  //console.log(window.innerWidth);

  //SetAboutSectionOpacity
  if(Hellotxt.getBoundingClientRect().top>0){
     if(getComputedStyle(AboutSection).opacity == "1")
      setTimeout(function(){AboutSection.style.opacity = "0"},1);
    }
  else{
    if(getComputedStyle(AboutSection).opacity == "0")
      setTimeout(function(){AboutSection.style.opacity = "1"},1);
    }



  //SetAboutmeSectionScrollingAnimation 

  if(isInViewport(AboutSection)){
    ScrollAnimation(AboutSection,Aboutme, 0.5 * (parseFloat(window.innerWidth)/1536),"x");
    Sidedistance = parseFloat(window.innerHeight-AboutSection.getBoundingClientRect().top) * 0.5 * (parseFloat(window.innerWidth)/1536);
    SetAboutDescription();
  }
  else{
    fixobjectPosition(AboutSection,Aboutme,0.6,"x");
    if(Sidedistance > 880)
        Sidedistance = 0;
    else
      Sidedistance = 1056;
  }
  


  //Right Section
  for(var x=0 ;x<IMGList.length; x++){
    for(var i=0 ;i<IMGList[x].length; i++){
        if(isInViewport(document.getElementById(IMGList[x][i].parentid)))
          ScrollAnimation(document.getElementById(IMGList[x][i].parentid),IMGList[x][i].imgobject,IMGList[x][i].speed,"y"); 
        else
          fixobjectPosition(document.getElementById(IMGList[x][i].parentid),IMGList[x][i].imgobject,IMGList[x][i].speed,"y");
    }
  }



  //Left Section
  if(Work_Description.getBoundingClientRect().top >40 || Work_Description.getBoundingClientRect().top < -50){
      Work_Description.style.transition = "0s";
      Work_Description.style.opacity = "0";
  }
  else{
      SetWorkDescription();
      Work_Description.style.transition = "1s";
      Work_Description.style.opacity = "1";
  }
    

  //SetContactSectionOpacity
  if(ContactSection.getBoundingClientRect().top < window.innerHeight * 0.8){
    ContactSection.style.transition = "opacity 0.6s ease-in-out";
    ContactSection.style.opacity = "1";
  }

  else{
    ContactSection.style.transition = "opacity 0s ease-in-out";
    ContactSection.style.opacity = "0"
  }

}




