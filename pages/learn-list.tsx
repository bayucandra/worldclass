import UserLayout from '@/layout/UserLayout';
import React from 'react';
import Image from 'next/image';

export default function Products() {
    return (
        <UserLayout title='Learnling lists'>
            <div className="w-full p-20 flex justify-between mx-auto bg-cover"
                style={{ backgroundImage: `url(/background.png)`, backgroundColor: "#F4F3F8" }}
            >
                <div className="py-10 w-2/4">
                    <h1 className='text-lg md:text-8xl text-left font-bebasneue font-bold text-danger tracking-wider'>
                        BEST CATEGORIES
                    </h1>
                </div>
                <div className="w-2/4">
                    <Image src="/welcomeimg.png" alt="welcome"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </UserLayout>

    )
}
