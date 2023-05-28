import React from 'react'
import { Avatar, Button, Card } from 'antd'
import './TopStories.css'

const FollowCard = () => {
  return (
    <>
      <div className='follow_card'>
        <Card
          style={{
            width: 160
          }}
        >
          <div className='center'>
            <Avatar size={70} />
          </div>
          <div className='mt-1 bold text-center'>Ahmad Umais</div>
          <div className='text-center text-muted'>Developer</div>
          <div className='center mt-1'>
            <Button className='text-white' style={{ background: '#2F9FF8' }}>
              Follow
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default FollowCard
