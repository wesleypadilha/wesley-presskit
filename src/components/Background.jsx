import { useEffect, useState } from "react";
import "./Background.css";


function Background(){


const [background, setBackground] = useState("/photos/dj3.jpeg");



useEffect(()=>{


const sections = document.querySelectorAll("section");



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){


const image = entry.target.dataset.bg;


if(image){

setBackground(image);

}


}


})


},

{
threshold:0.5
}

);



sections.forEach(section=>{

observer.observe(section);

});



return()=>observer.disconnect();



},[]);



return(

<div

className="background"

style={{

backgroundImage:`url(${background})`

}}

>

</div>

)

}


export default Background;