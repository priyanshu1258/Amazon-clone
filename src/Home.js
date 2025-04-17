import React, { useEffect, useRef } from 'react';
import './Home.css';
import Product from './Product';
import { v4 as uuidv4 } from 'uuid';


function Home() {
  const rowsRef = useRef([]); // Create a ref to store all rows

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the visible class when the row is in view
            entry.target.classList.add('home__row--visible');
          } else {
            // Remove the visible class when the row is out of view
            entry.target.classList.remove('home__row--visible');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the row is visible
    );

    // Observe each row
    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => {
      // Cleanup observer on unmount
      rowsRef.current.forEach((row) => {
        if (row) observer.unobserve(row);
      });
    };
  }, []);


  return (
    <div className='home'>
      <div className='home__container'>
        {/* Background image */}
        <img
          className='home__image'
          src='https://static.vecteezy.com/system/resources/previews/035/715/582/non_2x/group-of-fashion-people-characters-png.png'
          alt='Home Background'
        />

        {/* Container for product rows */}
        <div className='home__rowsContainer'>
          {/* First row */}
          <div
            className='home__row'
            ref={(el) => (rowsRef.current[0] = el)} // Attach ref to the first row
          >
            <Product
              id={uuidv4()}
              title='The Lean Startup'
              price={19.99}
              image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
              rating={5}
            />
            <Product
              id={uuidv4()}
              title= 'Kenwood kMix Stand Mixer'
              price={239.0}
              image='https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg'
              rating={4}
            />

            <Product
              id={uuidv4()}
              title="Peter England
               women's Mom Fit Jeans'"
              price={89.0}
              image='https://gl-images.condecdn.net/image/wy23eBxAq2K/crop/1020/f/gettyimages-1128367258.png'
              rating={4}
            />

            <Product
              id={uuidv4()}
              title="Handmade Chelsea Boots For Men"
              price={389.0}
              image='https://d1fufvy4xao6k9.cloudfront.net/images/landings/407/black-chelsea-boots.png'
              rating={5}
            />
          </div>

          {/* Second row */}
          <div
            className='home__row'
            ref={(el) => (rowsRef.current[1] = el)} // Attach ref to the second row
          >
            <Product
              id='1005'
              title='Amazon Echo (3rd generation)'
              price={98.99}
              image='https://m.media-amazon.com/images/I/61Gob-M3snL._AC_SL1000_.jpg'
              rating={5}
            />
            <Product
              id={uuidv4()}
              title="Regular Fit Linen-blend shirt"
              price={84.4}
              image='https://image.hm.com/assets/hm/8b/18/8b183fa5c1761132bffcbfe13c693e8cf4b66f9c.jpg?imwidth=336'
              rating={3}
            />
            <Product
              id={uuidv4()}
              title='Iphone 16 Pro Max (256GB) - Space Pink'
              price={999.0}
              image='https://pngimg.es/d/iphone16_PNG37.png'
              rating={4}
            />
            <Product
              id={uuidv4()}
              title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)'
              price={598.99}
              image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
              rating={4}
            />

            <Product
              id={uuidv4()}
              title='Sony A7R with 28-60Mm Zoom Lens | Compact Full Frame 64 GB Camera | 4K, Light Weight | Real Time Tracking '
              price={1800.0}
              image='https://th.bing.com/th/id/OIP.FCgjfk9SiKY77A2T-qKLAQHaHa?rs=1&pid=ImgDetMain'
              rating={4}
            />
          </div>

          {/* Third row */}
          <div
            className='home__row'
            ref={(el) => (rowsRef.current[2] = el)} // Attach ref to the third row
          >
            <Product
              id={uuidv4()}
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'
              rating={3}
            />
            <Product
              id={uuidv4()}
              title="LIGE's Premium Black Watch For Men"
              price={1000.0}
              image='https://m.media-amazon.com/images/I/81yu7XaocbL._AC_UY1000_.jpg'
              rating={3}
            />
            <Product

              id={uuidv4()}
              title='Baggy Fit Jeans for Men'
              price={68.0}
              image='https://cdnd.lystit.com/photos/nordstromrack/4f47802f/topman-BLACK-Baggy-Fit-Jeans.jpeg'
              rating={5}
            />
            <Product
              id={uuidv4()}
              title='Double Eagle Full Metal L96 Bolt Action  Sniper Rifle'
              price={8000}
              image='https://pngimg.com/d/sniper_rifle_PNG44.png'
              rating={5}
            />
            <Product
              id={uuidv4()}
              title='Apple 2025 MacBook Air (13-inch, Apple M4 chip with 10-core CPU and 10-core GPU, 16GB Unified Memory, 512GB)'
              price={1500}
              image='https://purepng.com/public/uploads/large/purepng.com-macbookmacbooknotebookcomputersapple-inmacbook-familyapple-laptops-1701528360828pu4ti.png'
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;