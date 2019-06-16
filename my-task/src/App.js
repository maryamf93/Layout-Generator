import React from 'react'
import CaseFirst from './Components/CaseFirst'
import CaseSecond from './Components/CaseSecond'
import CaseThird from './Components/CaseThird'
import CaseFourth from './Components/CaseFourth'
import CaseFifth from './Components/CaseFifth'
import './App.css'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <CaseFirst />
        <CaseSecond />
        <CaseThird />
        <CaseFourth />
        <CaseFifth />
      </div>
    )
  }
}

export default App
