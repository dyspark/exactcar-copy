'use client'

import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { CustomButton } from '.';

const Hero = () => {
    const router = useRouter()
    
    const handleSearch = () => {
        router.push('/search')
    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find the exact car you want!
                </h1>

                <p className='hero__subtitle'>
                    Streamline your car buying experience with our effortless process.
                </p>

                <CustomButton
                    title='Explore Cars'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleSearch}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/hero.png' alt='hero' fill className='object-contain' />

                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero