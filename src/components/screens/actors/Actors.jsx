import React from 'react'
import Layout from '../../layout/Layout'
import FirstActor from './img/Cho_Ho-Jen.jpg'
import SecondActor from './img/Li_Do_De.jpg'
import ThirdActor from './img/274px-Gong_Yoo_(Sep_2016).png'
import FoursActor from './img/Wi_Ha-joon_September_2021_(cropped).png'

export default function Actors() {
    return (
       
            <Layout  >
                <div className='flex mt-10 items-center' style={{ minHeight: 700 }}>

                <div style={{width: '200px', height: '400px', padding: '15px', border: '2px solid #FF287E'}}
                className='text-white hover:opacity-100 opacity-80 duration-300 ease-in-out transition-opacity ml-20'
                >
                <img width='150px' alt='' src={FirstActor}/>
                <div className='description text-white' style={{fontSize: '25px'}}>
                Jeong Ho-yeon
                </div>
                </div>

                <div style={{width: '200px', height: '400px', padding: '15px', border: '2px solid #FF287E'}}
                  className='text-white hover:opacity-100 opacity-80 duration-300 ease-in-out transition-opacity ml-20'
                >
                <img width='150px' alt='' src={SecondActor}/>
                <div className='description text-white' style={{fontSize: '25px'}}>
                Li Do De
                </div>
                </div>

                <div style={{width: '200px', height: '400px', padding: '15px', border: '2px solid #FF287E'}}
                  className='text-white hover:opacity-100 opacity-80 duration-300 ease-in-out transition-opacity ml-20'
                >
                <img width='150px' alt='' src={ThirdActor}/>
                <div className='description text-white' style={{fontSize: '25px'}}>
                Gong Yoo
                </div>
                </div>

                <div style={{width: '200px', height: '400px', padding: '15px', border: '2px solid #FF287E'}}
                  className='text-white hover:opacity-100 opacity-80 duration-300 ease-in-out transition-opacity ml-20'
                >
                <img width='150px' alt='' src={FoursActor}/>
                <div className='description text-white' style={{fontSize: '25px'}}>
                Wi Ha Joon
                </div>
                </div>

                </div>
            </Layout>
      
    )
}
