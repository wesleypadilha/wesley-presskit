import { motion } from "framer-motion";
import "./Events.css";


function Events(){


const events=[

"Versus Club",

"Dunkel",

"Bar do Deca",

"Eclipse Tubarão",

"Eclipse Criciúma",

"Don Club",

"Vitto Bar",

"Espaço Central - After House"

];



return(


<motion.section

className="events"

id="eventos"

initial={{ opacity:0, y:50 }}

whileInView={{ opacity:1, y:0 }}

transition={{ duration:1 }}

viewport={{ once:true }}

>



<motion.h2

initial={{ opacity:0 }}

whileInView={{ opacity:1 }}

transition={{ duration:0.8 }}

viewport={{ once:true }}

>

EVENTOS

</motion.h2>




<div className="event-list">


{

events.map((event,index)=>(


<motion.div

className="card"

key={index}

initial={{ opacity:0, y:40 }}

whileInView={{ opacity:1, y:0 }}

transition={{

duration:0.5,

delay:index * 0.1

}}

viewport={{ once:true }}

>


{event}


</motion.div>


))

}



</div>


</motion.section>


)


}


export default Events;