import { Hero } from '@/components'
import Image from 'next/image'

export default function Search() {
    return (
        <main className="overflow-hidden">
            <div className='mt-12 padding-x padding-y max-width' id='discover'>
                <div className='home__text-container'>
                    <h1 className='text-4xl font-extrabold'>
                        Car List
                    </h1>
                    <p>
                        Find the cars you want
                    </p>
                </div>
            </div>
        </main>
    )
}
