import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
         <img 
  className='home__image'
  src='https://s1.elespanol.com/2023/09/22/bluper/series/796430745_236241823_1706x960.jpg' 
  alt=''
/>

         {/* First row with two products */}
         <div className='home__row'>
           <Product 
             title="The Lean Startup" 
             price={19.99} 
             image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" 
             rating={5} 
           />
           <Product 
             title="Kenwood kMix Stand Mixer" 
             price={239.0} 
             image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg" 
             rating={4} 
           />
          
            
    
         </div>

         {/* Second row with three products */}
         <div className='home__row'>
           <Product 
             title="Amazon Echo (3rd generation)" 
             price={98.99} 
             image="https://m.media-amazon.com/images/I/61Gob-M3snL._AC_SL1000_.jpg" 
             rating={5} 
           />
           <Product 
             title="Pruning Shears" 
             price={499.99} 
             image="https://th.bing.com/th/id/OIP.O-garg9f2YJKo8r2P6pZDAHaHa?rs=1&pid=ImgDetMain" 
             rating={4} 
           />
           <Product 
             title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)" 
             price={598.99} 
             image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" 
             rating={4} 
           />
         
            
         </div>

         {/* Third row with one product */}
         <div className='home__row'>
           <Product 
             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
             price={199.99} 
             image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg" 
             rating={3}
           />
           
         </div>
      </div>
    </div>
  )
}

export default Home;