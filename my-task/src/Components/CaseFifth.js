import React from 'react'

class CaseFifth extends React.Component {
  render () {
    return (
      <div className='output-box' >
        <div className='Slot' >
            Slot-1
        </div>
        <div className='partition'>
          <div className='Slot' >
              Slot-2
          </div>
          <div className='Slot border-bottom row' >
            <div className='border-right Slot-end' >
                Slot-3
            </div>
            <div className='Slot-end' >
                Slot-4
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CaseFifth
