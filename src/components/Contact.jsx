import { motion } from "framer-motion";
import "./Contact.css";


function Contact(){

return(

<motion.section

className="contact"

id="contato"

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{duration:1}}

viewport={{once:true}}

>


<h2>
BOOKING
</h2>



<p>

Entre em contato para shows, clubs, eventos e projetos especiais.

</p>




<div className="contact-buttons">



<a

href="https://www.instagram.com/wesleypadilha_/"

target="_blank"

rel="noreferrer"

>

Instagram

</a>





<a

href="https://soundcloud.com/wesleypadilha"

target="_blank"

rel="noreferrer"

>

 SoundCloud

</a>





<a

href="https://wa.me/5541998264401?text=Olá Wesley, gostaria de contratar seu set"

target="_blank"

rel="noreferrer"

>

 WhatsApp

</a>




</div>


</motion.section>


)

}


export default Contact;