import React from 'react';
import anh from './images/anh1.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemUser from './feautures/ItemUser';
import ItemUserClass from './feautures/ItemUserClass';
import Bt1ss02 from './Homework/session2/Bt1/Bt1ss02';
import Bt2ss02 from './Homework/session2/Bt2/Bt2ss02';
import Bt3ss02 from './Homework/session2/Bt3/Bt3ss02';
import ChartBar1 from './Homework/session2/Bt4/ChartBar1';
import ChartBar2 from './Homework/session2/Bt5/ChartBar2';
import ChartBar3 from './Homework/session2/Bt6/ChartBar3';

function App() {
   return (
      // <div className="baitap1">
      //     <Bt1ss02
      //     image = 'https://bizweb.dktcdn.net/100/337/030/products/be9cb90dcda22afc73b3.jpg?v=1569481561697://raw.githubusercontent.com/ngothanhtung/reactjs-tutorials/master/3-Homeworks/Session02/basic-1.jpg'
      //     title = 'Clothing & Apparel'
      //     p1 = 'Accessories'
      //     p2 = 'Bags'
      //     p3 = "Kid's Fashion"
      //     p4 = 'Mens'
      //    />
      // </div>

      //   <div className="Baitap2">
      //       <Bt2ss02
      //          img = 'https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg'
      //          title = 'YOUNG SHOP'
      //          description ='Samsung UHD TV 24inch'
      //          start = ''
      //          price = '$599'
      //       />
      //   </div>

      // <div className="Baitap3"> 
      //    <Bt3ss02 
      //       image = 'https://images.unsplash.com/photo-1665686310974-2ed1eb7f57ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      //       description = 'Teachnology'
      //       title ='Harman Kandon Onỹ Studio Mini,Reviews & Experiences'
      //       pulishat = 'Feb 21,2021 by drfurion'
      //    />
      // </div>

      <div className="charBar1">
         <div className='w-50'>
            <ChartBar1
               title1={'BANDWIDTH'}
               title2={'20%'}
               percent={80}
               color={'red'}
               color1={'blue'}
            />

            <ChartBar1
               title1={'STORAGE'}
               title2={'50%'}
               percent={200}
               color={'blue'}
               color1={'red'}
            />

            <ChartBar1
               title1={'USERS'}
               title2={'70%'}
               percent={300}
               color={'green'}
               color1={'yellow '}
            />

            <ChartBar1
               title1={'VISISTORS'}
               title2={'30%'}
               percent={100}
               color={'pink'}
               color1={'red '}
            />

            <ChartBar1
               title1={'EMAILS'}
               title2={'45%'}
               percent={170}
               color={'blue'}
               color1={'green '}
            />

            <ChartBar1
               title1={'BASIC'}
               title2={'80%'}
               percent={350}
               color={'red'}
               color1={'pink '}
            />

            <ChartBar1
               title1={'USERS'}
               title2={'37%'}
               percent={115}
               color={'yellow'}
               color1={'green '}
            />
         </div>

      </div>

      // <div className="chartBar2">
      //    <ChartBar2
      //       image={'https://cdn.pixabay.com/photo/2018/05/08/21/28/android-3384009_960_720.png'}
      //       description={'HTML'}
      //       percent={250}
      //       color1={'red'}
      //    />

      //    <ChartBar2
      //       image={'https://st.quantrimang.com/photos/image/2019/05/13/ngon-ngu-lap-trinh-ham-3.png'}
      //       description={'CSS'}
      //       percent={200}
      //       color1={'blue'}
      //    />

      //    <ChartBar2
      //       image={'https://glints.com/vn/blog/wp-content/uploads/2022/03/ruby-programming-language.png'}
      //       description={'PHP'}
      //       percent={80}
      //       color1={'yellow'}
      //    />

      //    <ChartBar2
      //       image={'http://itplus-academy.edu.vn/upload/java-1438088500.png'}
      //       description={'Java'}
      //       percent={300}
      //       color1={'pink'}
      //    />

      //    <ChartBar2
      //       image={'https://itviec.com/blog/wp-content/uploads/2015/07/php-640x346.png'}
      //       description={'.Net'}
      //       percent={200}
      //       color1={'orange'}
      //    />


      // </div>

      // <div className="chartBar3">
      //    <ChartBar3
      //       image='https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png'
      //       text='Facebook'
      //       total='5,00,000 likes'
      //       bg={'#4A6EA8'}
      //    />

      //    <ChartBar3
      //       image='https://cdn-icons-png.flaticon.com/512/124/124021.png'
      //       text='Twitter'
      //       total='40,000 Tweets'
      //       bg={'#50ABF1'}
      //    />

      //    <ChartBar3
      //       image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Google_Plus_icon_%282015-2019%29.svg/1200px-Google_Plus_icon_%282015-2019%29.svg.png'
      //       text='Google +'
      //       total='4,60,000 plus'
      //       bg={'#D44032'}
      //    />

      //    <ChartBar3
      //       image='https://png.pngtree.com/png-clipart/20190520/original/pngtree-pinterest-social-media-icon-png-image_3609690.jpg'
      //       text='Printerest'
      //       total='34,000 Pins'
      //       bg={'#CB2329'}
      //    />
      // </div>



   )
}



export default App;
