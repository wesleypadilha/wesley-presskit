import { motion } from "framer-motion";
import "./About.css";


function About(){

return(

<motion.section

className="about"

id="sobre"

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

SOBRE

</motion.h2>



<motion.p

initial={{ opacity:0, y:20 }}

whileInView={{ opacity:1, y:0 }}

transition={{ duration:0.8, delay:0.2 }}

viewport={{ once:true }}

>

Wesley Padilha é DJ de Tribal House, EDM e House Music,
atualmente residente em Curitiba/PR. Há 2 anos na cena,
possui parceria fixa com o selo After House e segue em uma
crescente trajetória, consolidando cada vez mais seu nome na
cena eletrônica.

Buscando novos horizontes, iniciou seus estudos em produção
musical e já promete grandes projetos para a cena atual.
Conhecido por sets animados e uma identidade sonora marcante,
sua performance mistura emoção, grooves intensos e uma
experiência criada especialmente para a pista.

</motion.p>




<motion.p

initial={{ opacity:0, y:20 }}

whileInView={{ opacity:1, y:0 }}

transition={{ duration:0.8, delay:0.4 }}

viewport={{ once:true }}

>

Já passou por clubs e eventos no Sul do Brasil, marcando
presença em Curitiba nos clubs:

<br/><br/>

<strong>
Versus Club, Dunkel, Vitto Bar, Cavan77 e Espaço Central.
</strong>

<br/><br/>

Também esteve presente na grande Florianópolis em:

<br/><br/>

<strong>
Bar do Deca, Eclipse Tubarão, Eclipse Criciúma e Don Club.
</strong>

</motion.p>



</motion.section>

)

}


export default About;