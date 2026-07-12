import "./Gallery.css";

function Gallery(){

const photos = [
"/photos/dj1.jpeg",
"/photos/dj4.jpeg",
"/photos/dj2.jpeg",
"/photos/dj3.jpeg",

];


return(

<section className="gallery" id="galeria">

<h2>Galeria</h2>

<p>
Momentos, palcos e experiências através da música.
</p>


<div className="gallery-grid">

{
photos.map((photo,index)=>(

<div className="photo-card" key={index}>

<img 
src={photo}
alt={`Wesley Padilha DJ ${index + 1}`}
/>

</div>

))
}

</div>


</section>

)

}

export default Gallery;