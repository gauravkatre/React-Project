import { useState,useEffect,useRef,useCallback } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [password,setPassword]=useState("")
  const [numbered,setNubered]=useState(false)
  const [special,setSpecial]=useState(false)
  const passwordRef=useRef(null)

  const generatePassword=useCallback(()=>{
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numbered) str+="0123456789"
    if(special) str+="!@#$%^&*()_+"
    let pass=""
    for(let i=0;i<length;i++){
      const randomIndex=Math.floor(Math.random()*str.length)
      pass+=str[randomIndex]
    }
    setPassword(pass)
  },[length,numbered,special])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    generatePassword()
  }, [length, numbered, special, generatePassword])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-16 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numbered}
          id="numberInput"
          onChange={() => {
              setNubered((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={special}
              id="characterInput"
              onChange={() => {
                  setSpecial((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Special Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App