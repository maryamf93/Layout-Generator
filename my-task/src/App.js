import React from 'react'
import CaseFirst from './Components/CaseFirst'
import CaseSecond from './Components/CaseSecond'
import CaseThird from './Components/CaseThird'
import CaseFourth from './Components/CaseFourth'
import CaseFifth from './Components/CaseFifth'
import './App.css'
import Select from 'react-select'

const options = [
  { 
    value: 'caseOne',
    label: 'XL'
  }, {
    value: 'caseTwo',
    label: '2XL'
  }, {
    value: 'caseThree',
    label: '4L'
  }, {
    value: 'caseFour',
    label: 'XL/2L'
  }, {
    value: 'caseFive',
    label: 'XL/L/2SM'
  }
]

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: null
    }
  }

  handleChange = (selectedOption) => {
    console.log('bbbb', selectedOption.value)
      this.setState({ selectedOption },
      () => function renderSwitch() { 
        switch (selectedOption.value) {
          case 'caseOne':
            return (
              <CaseFirst />
            )
          case 'caseTwo':
            return (
              <CaseSecond />
            )
          case 'caseThree':
            return (
              <CaseThird />
            )
          case 'caseFour':
            return (
              <CaseFourth />
            )
          case 'caseFive':
            return (
              <CaseFifth />
            )
        }
      })
    console.log('selectedOption.value', selectedOption.value)
  }

  render () {
    const { selectedOption } = this.state
    return (
      <div className='App'>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <div>
          { selectedOption !== null? () => this.renderSwitch(): null }
        </div>
      </div>
    )
  }
}

export default App
