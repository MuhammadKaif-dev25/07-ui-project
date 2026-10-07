import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLete7urUSc7zMPgFdy3mRirFBGm0fG1HdJ_opdhd8g&s=10", 
      btn: "Click Me"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LVAy3YjeKoSIpZdyu3qBhGwlEwbs4Wl5Azw3rm67aw&s=10",
      btn: "Learn More"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RV4ax4huhOnFG3sHwcXhLdioaShgXjYR-h3Lk0J0Hw&s=10",
      btn: "Submit"
    }
  ];
  return (
    <div>
      <Section1  user={users}/>
      <Section2 />
    </div>
  )
}

export default App
