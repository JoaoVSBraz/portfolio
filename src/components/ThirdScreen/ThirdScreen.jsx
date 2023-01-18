import htmlSvg from '../../assets/html.svg'
import cssSvg from '../../assets/css.svg'
import jsSvg from '../../assets/js.svg'
import reactSvg from '../../assets/react.svg'
import bootstrapSvg from '../../assets/bootstrap.svg'
import tailwindSvg from '../../assets/tailwind.svg'

export default function ThirdScreen(){
    return (
        <div id='contact' className="container flex flex-col h-screen">
            <div className="bg-white-regular h-[50vh]">
                <section id="skills" className="flex align-center justify-center gap-8 overflow-x-auto my-8 p-6">
                    <img src={htmlSvg} alt="html svg" />
                    <img src={cssSvg} alt="css svg" />
                    <img src={jsSvg} alt="js svg" />
                    <img src={reactSvg} alt="react svg" />
                    <img src={bootstrapSvg} alt="bootstrap svg" />
                    <img src={tailwindSvg} alt="tailwind svg" />
                </section>
                <p className='text-[32px] p-8 flex align-center m-auto'>Tem uma ideia de projeto legal?</p>
            </div>
            <footer className='flex flex-col h-full justify-between place-items-center bg-gray-dark'>
                <p className='flex text-[32px] p-8 underline text-primary-regular'>joaovsbraz@gmail.com</p>
                <p className='flex w-full justify-center text-sm text-white-light p-8'>2023 © Desenhado e desenvolvido por João Braz</p>
            </footer>
        </div>
    )
}