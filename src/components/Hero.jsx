import { motion } from "framer-motion";
import "./Hero.css";


function Hero(){

return(

<section className="hero" id="home">


<motion.div

className="hero-content"

initial={{ opacity: 0, y: 50 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 1 }}

>


<motion.p

className="hero-tag"

initial={{ opacity: 0 }}

animate={{ opacity: 1 }}

transition={{ duration: 1, delay: 0.2 }}

>

DJ • TRIBAL HOUSE

</motion.p>



<motion.h1

initial={{ opacity:0, scale:0.8 }}

animate={{ opacity:1, scale:1 }}

transition={{ duration:1, delay:0.3 }}

>

WESLEY

<br/>

PADILHA

</motion.h1>




<motion.h2

initial={{ opacity:0 }}

animate={{ opacity:1 }}

transition={{ duration:1, delay:0.6 }}

>

Energia, groove e conexão com a pista.

</motion.h2>




<motion.div

className="hero-buttons"

initial={{ opacity:0, y:30 }}

animate={{ opacity:1, y:0 }}

transition={{ duration:1, delay:0.9 }}

>


<a href="#musica">
OUVIR SETS
</a>


<a href="#contato">
BOOKING
</a>


</motion.div>



</motion.div>


</section>

)

}


export default Hero;