'use client'

import Image from "next/image"
import CustomButton from "./CustomButton"
import { useRouter } from "next/navigation"

const Hero = () => {
  const router = useRouter()
  const handleScroll = () => {
    router.push(`${window.location.pathname}#cars`)
  }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, book, or rent a car -- quickly and easily!
            </h1>

            <p className="hero__subtitle">
                Streamline your car rental experience with our effortless booking process
            </p>

            <CustomButton title='Explore cars' containerStyles='text-white bg-primary-blue mt-10 rounded-full' handleClick={handleScroll}/>
        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src='/hero.png' alt="hero" fill className="object-contain"/>
            </div>
            <div className="hero__image-overlay"/>

        </div>
    </div>
  )
}

export default Hero