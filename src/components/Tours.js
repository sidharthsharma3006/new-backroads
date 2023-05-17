import Title from "./Title";
import {tours} from "../Data.js"; 
const Tours = ()=>{
    return (
      <section className="section" id="tours">
        <Title title="Featured" subtitle="Tours" />  
         <div className="section-center featured-center">
        
        {
         tours.map((x)=>{
             return (
              
          <article className="tour-card" key={x.id}>
            <div className="tour-img-container">
              <img src= {x.img} className="tour-img" alt="" />
              <p className="tour-date">{x.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{x.title}</h4>
              </div>
              <p>
                  {x.text}; 
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {x.country}
                </p>
                <p>{x.duration}</p>
                <p>{x.price}</p>
              </div>
            </div>
          </article>
             )
         }) 
        } 
        
        </div>
      </section>
    ); 
} 
export default Tours; 