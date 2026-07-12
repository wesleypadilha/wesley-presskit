import { useState } from "react";
import "./Navbar.css";


function Navbar(){


const [menuOpen, setMenuOpen] = useState(false);



return(


<nav className="navbar">



<div className="logo">


<span>WP</span>


<p>WESLEY PADILHA</p>


</div>





<div

className={`hamburger ${menuOpen ? "active" : ""}`}

onClick={()=>setMenuOpen(!menuOpen)}

>


<span></span>

<span></span>

<span></span>


</div>






<div

className={`nav-links ${menuOpen ? "open" : ""}`}

>


<a href="#home" onClick={()=>setMenuOpen(false)}>
Home
</a>


<a href="#sobre" onClick={()=>setMenuOpen(false)}>
Sobre
</a>


<a href="#musica" onClick={()=>setMenuOpen(false)}>
Sets
</a>


<a href="#eventos" onClick={()=>setMenuOpen(false)}>
Eventos
</a>


<a href="#performance" onClick={()=>setMenuOpen(false)}>
Performance
</a>


<a href="#galeria" onClick={()=>setMenuOpen(false)}>
Galeria
</a>


<a href="#contato" onClick={()=>setMenuOpen(false)}>
Booking
</a>



</div>



</nav>


)


}


export default Navbar;