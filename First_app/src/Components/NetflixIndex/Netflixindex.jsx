// import {NetflixMain} from '../NetflixMain/Netflixmain'
// import './Netflixindex.css'


// export function NetflixIndex(){
    
//     return(
//         <div className='container-fluid'> 

//             <div>
//                 <header></header>
//             </div>

//     <section>
//       <main>
//        <NetflixMain></NetflixMain>
//       </main>
//     </section>


//     <div>
//         <footer></footer>
//     </div>

//         </div>
//     )
// }

import { NetflixMain } from '../NetflixMain/Netflixmain';
import './Netflixindex.css';

export function NetflixIndex() {
  return (
    <div className='container-fluid'> 
      <header />
      
      <section>
        <main>
          <NetflixMain />
        </main>
      </section>

      <footer />
    </div>
  );
}
