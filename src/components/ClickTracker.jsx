import React, {useState} from 'react'

function ClickTracker(){
  
  const [count, setCount] = useState(0);
  const [click, setClick] = useState();
  
  const handleClick = () => {
      setCount(count +1)
      setClick(new Date().toLocaleString())
  }
    return (
        
        <div style={{ padding: 15, textAlign: 'center'}}>
            
            <p>Clickeaste: {count} veces</p>
            {click ? <p>Último click: {click}</p> : <p>No hay último click</p>}
             
                <button style={{padding: 10, margin: 10}} 
                
                onClick={handleClick}
                
                >Clickeame!</button>
        
        </div>
  
        )
}

export default ClickTracker
