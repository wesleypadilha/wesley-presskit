import { motion } from "framer-motion";
import "./Music.css";


function Music(){

return(

<motion.section

className="music"

id="musica"

initial={{ opacity:0, y:50 }}

whileInView={{ opacity:1, y:0 }}

transition={{ duration:1 }}

viewport={{ once:true }}

>


<div className="music-title">


<h2>
MÚSICA
</h2>


<p>
Sets, performances e experiências através do Tribal House.
</p>


</div>




<div className="sets-container">



<motion.div

className="set featured"

initial={{ opacity:0, x:-50 }}

whileInView={{ opacity:1, x:0 }}

transition={{ duration:0.8 }}

viewport={{ once:true }}

>


<span className="badge">
LATEST SET
</span>


<h3>
🔥 SET SPECIAL BDAY
</h3>


<p>
WESLEY PADILHA - SET SPECIAL BDAY - TRIBAL HOUSE
</p>



<iframe

width="100%"

height="300"

scrolling="no"

frameBorder="no"

allow="autoplay"

src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/wesleypadilha/wesley-padilha-set-special"

>

</iframe>



</motion.div>






<motion.div

className="set"

initial={{ opacity:0, x:50 }}

whileInView={{ opacity:1, x:0 }}

transition={{ duration:0.8 }}

viewport={{ once:true }}

>


<h3>
🎭 SET ESPECIAL CARNAVAL
</h3>



<p>
WESLEY PADILHA - SET SPECIAL CARNAVAL - TRIBAL HOUSE
</p>




<iframe

width="100%"

height="300"

scrolling="no"

frameBorder="no"

allow="autoplay"

src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/wesleypadilha/carnavalwesleypadilha"

>

</iframe>



</motion.div>




</div>


</motion.section>

)

}


export default Music;