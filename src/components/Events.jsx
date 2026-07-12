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

<section className="events" id="eventos">

<h2>Eventos</h2>


<div className="event-list">

{
events.map((event,index)=>(

<div className="card" key={index}>
{event}
</div>

))
}


</div>


</section>

)

}


export default Events;