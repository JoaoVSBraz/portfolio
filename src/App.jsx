import FirstScreen from "./components/FirstScreen/FirstScreen"
import SecondScreen from "./components/SecondScreen/SecondScreen"
import ThirdScreen from "./components/ThirdScreen/ThirdScreen"

export default function App() {
  return (
    <main className="bg-gray-dark font-saira font-medium text-center overflow-hidden">
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
    </main>
  )
}