function scrollToServices(){

document.getElementById("services").scrollIntoView({

behavior:"smooth"

});

}

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

this.reset();

});

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});