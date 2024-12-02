'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
    if (typeof window !== undefined) {
        gsap.registerPlugin(useGSAP);
    }
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.add(
            gsap.from('.logo', {
                y: 100,
                duration: 0.5,
                delay: 0.5,
            })
        );
        tl.add(
            gsap.from('li', {
                y: 50,
                duration: 0.4,
                stagger: 0.3,
            })
        );
    });

    return (
        <div className="bg-primary">
            <nav className="bg-primary container mx-auto text-white p-4 h-24 flex justify-between items-center">
                <div className="overflow-hidden flex justify-between items-center w-full">
                    <div className="logo text-3xl text-accent font-logo font-black cursor-pointer">
                        harsh.dev
                    </div>
                    <div>
                        <ul className="flex gap-5 items-center">
                            <li className="cursor-pointer hover:text-white text-gray-300 font-medium ">
                                About
                            </li>
                            <li className="cursor-pointer hover:text-white text-gray-300 font-medium">
                                Portfolio
                            </li>
                            <li className="cursor-pointer hover:text-white text-gray-300 font-medium">
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
