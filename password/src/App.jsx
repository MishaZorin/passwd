import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  function charsInPassword() {
    setPassword(() => {
      let result = ''
      let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      for (let i = 0; i < 12; i++) {
        result += symbols[Math.floor(Math.random() * symbols.length)]
        console.log(result);
      }
      setPassword(result)



    })


  }
  const copy = () => {
    setCopied(() => {
      navigator.clipboard.writeText(password)

      setTimeout(() => setCopied(false), 2000)

    })
    setCopied(true)

  }

  return (
    <>
      <div className="app">
        <h1>Создай Свой Пароль!</h1>
        <button onClick={() => charsInPassword()}>Сгенерировать!</button>
        <h2>Ваш пароль:{password} </h2>
        {/* Показываем кнопку копирования только если пароль уже есть */}
        {password && (
          <button onClick={copy} className={copied ? 'copied' : ''}>
            {copied ? 'Скопировано!' : 'Копировать'}
          </button>
        )}

      </div>

    </>
  )
}

export default App
