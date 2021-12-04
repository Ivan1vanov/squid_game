import React from 'react'
import ReactPlayer from 'react-player'
import Layout from '../../layout/Layout'

export default function Trailer() {
    return (
        <Layout>
			<div className='flex mt-10' style={{ minHeight: 700 }}>
            <ReactPlayer url={'https://www.youtube.com/watch?v=oqxAJKy0ii4&t=60s'} />
            <div className='text-white ml-30' style={{width: '900px'}}>
            <h1
            className='p-5'
             style={{fontSize: '30px', marginLeft: '50px', letterSpacing: '10px', backgroundColor: '#FF287E'}}>
                 
                 Squid Game</h1>
            <p className='p-3'
            style={{marginLeft: '50px', fontSize: '20px', paddingTop: '25px', wordSpacing: '10px', letterSpacing: '5px',
                        border: '1px solid #FF287E'
        }}>
            Four hundred and fifty-six people, most of whom are experiencing serious financial problems, accept an invitation to participate in a mysterious survival tournament. After one player is eliminated from the competition, the prize is increased by 100 million won. The winner of the tournament will receive 45.6 billion won (US $ 38.5 million). However, the stakes in the game are deadly.</p>
            </div>
			</div>
		</Layout>
    )
}
