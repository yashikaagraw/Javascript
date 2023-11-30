import React from 'react'

const form = () => {
  return (
    <form>
        <input 
        type="text"
        value={inputValue}
        onChange={handleinput} 
        />
    </form>
  )
}

export default form