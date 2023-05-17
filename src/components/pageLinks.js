import {pageLinks} from '../Data'; 

export const PageLinks = (props)=>{
      return(
      <ul className={props.parentClass} id="nav-links"> 
        {pageLinks.map((x)=>{
         return (<li>
           <a href={x.href} className={props.subClass}>
            {x.text}
           </a>
         </li> 
         );
        })}
        </ul> 
      );     
}