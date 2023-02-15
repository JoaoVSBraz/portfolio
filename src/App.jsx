import FirstScreen from "./components/FirstScreen/FirstScreen"
import SecondScreen from "./components/SecondScreen/SecondScreen"
import ThirdScreen from "./components/ThirdScreen/ThirdScreen"
import Top from './assets/top.svg'
import { useEffect, useState } from "react"

export default function App() {
  const windowHeight = window.innerHeight
  const halfWindow = windowHeight / 2
  const backToTopButton = document.querySelector('#to-top')

  function watchWindow() {
    if (Math.abs(document.body.getBoundingClientRect().top) > halfWindow) {
      backToTopButton.classList.remove('hidden')
    } else {
      backToTopButton.classList.add('hidden')
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', watchWindow)
    }
    watchScroll()
    return () => { window.removeEventListener('scroll', watchWindow) }
  }, [])

  return (
    <main className="relative bg-gray-dark font-saira font-medium text-center overflow-hidden md:text-lg">
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <img id="to-top" src={Top} alt="Botão voltar ao topo" className="hidden fixed w-12 z-50 bottom-4 right-4" />
    </main>
  )
}