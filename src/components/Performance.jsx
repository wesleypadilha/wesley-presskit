import { motion } from "framer-motion";
import "./Performance.css";


function Performance(){

return(

<motion.section

className="performance"

id="performance"

initial={{opacity:0, y:50}}

whileInView={{opacity:1, y:0}}

transition={{duration:1}}

viewport={{once:true}}

>


<h2>
PERFORMANCE
</h2>


<p>
Momentos de palco, energia da pista e experiências ao vivo.
</p>




<div className="videos">



<motion.div

className="video-card"

initial={{opacity:0, x:-50}}

whileInView={{opacity:1, x:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>


<h3>
🔥 LIVE PERFORMANCE
</h3>



<video

className="dj-video"

controls

loop

playsInline

>


<source

src="/videos/performance1.mp4"

type="video/mp4"

/>


Seu navegador não suporta vídeo.


</video>


</motion.div>






<motion.div

className="video-card"

initial={{opacity:0, x:50}}

whileInView={{opacity:1, x:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>


<h3>
▶️ LIVE SET YOUTUBE
</h3>



<iframe

width="100%"

height="315"

src="https://www.youtube.com/embed/zhesJRVLi-s"

title="Wesley Padilha Live Set"

frameBorder="0"

allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

allowFullScreen

>

</iframe>



</motion.div>



</div>



</motion.section>


)

}


export default Performance;