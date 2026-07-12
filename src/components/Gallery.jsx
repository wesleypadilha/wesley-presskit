import { motion } from "framer-motion";
import "./Gallery.css";


function Gallery(){


const photos = [

"/photos/dj1.jpeg",

"/photos/dj4.jpeg",

"/photos/dj2.jpeg",

"/photos/dj3.jpeg",

];



return(


<motion.section

className="gallery"

id="galeria"

initial={{opacity:0, y:50}}

whileInView={{opacity:1, y:0}}

transition={{duration:1}}

viewport={{once:true}}

>


<motion.h2

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{duration:0.8}}

viewport={{once:true}}

>

GALERIA

</motion.h2>




<p className="gallery-text">

Fotos oficiais, momentos de palco e registros da trajetória de Wesley Padilha.

</p>





<div className="gallery-grid">


{

photos.map((photo,index)=>(


<motion.img


key={index}

src={photo}

alt={`Wesley Padilha DJ ${index + 1}`}


initial={{opacity:0, scale:0.8}}

whileInView={{opacity:1, scale:1}}

transition={{

duration:0.5,

delay:index * 0.15

}}

viewport={{once:true}}


>


</motion.img>


))


}


</div>





<a

className="drive-button"

href="https://drive.google.com/drive/folders/1K2COLQJCtqzake3gw96r868X20hCY9De"

target="_blank"

>

📸 VER TODAS AS FOTOS

</a>



</motion.section>


)

}


export default Gallery;