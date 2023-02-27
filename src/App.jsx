import FirstScreen from "./components/FirstScreen/FirstScreen"
import SecondScreen from "./components/SecondScreen/SecondScreen"
import ThirdScreen from "./components/ThirdScreen/ThirdScreen"
import Top from './assets/top.svg'

export default function App() {
  const windowHeight = window.innerHeight
  const halfWindow = windowHeight / 2
  
  window.addEventListener('scroll', handleScroll, false)

  function handleScroll() {
    const backToTopButton = document.querySelector('#to-top')
    if (Math.abs(document.body.getBoundingClientRect().top) > halfWindow) {
      backToTopButton.classList.remove('hidden')
    }else{
      backToTopButton.classList.add('hidden')
    }
  }

  function handleClick(){
    const header = document.querySelector('#header')
    header.scrollIntoView({behavior: "smooth"})
  }

  return (
    <main className="relative bg-gray-dark font-saira font-medium text-center overflow-hidden md:text-lg" onScroll={handleScroll}>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <img onClick={handleClick} id="to-top" src={Top} alt="Botão voltar ao topo" className="hidden fixed w-12 z-50 bottom-4 right-4 hover:cursor-pointer" />
    </main>
  )
}