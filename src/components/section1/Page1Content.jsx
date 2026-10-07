import React from 'react'
import LeftContent from './LeftContent'
import Rightcontent from './Rightcontent'

const Page1Content = (props) => {
  return (
    <div className='h-[90vh] py-8 px-12 flex gap-6'>
      <LeftContent />
      <Rightcontent user= {props.user} />
    </div>
  )
}

export default Page1Content
