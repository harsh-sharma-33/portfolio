'use client';
import Image from 'next/image';
import image from '../app/assets/person.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = () => {
    const text1 = `I'M `;
    const text2 = `Harsh Kumar`;
    const text3 = `Full Stack Developer`;

    const nameHoverTween = () => {
        return [
            gsap.to('.name-main', {
                y: -20,
                duration: 0.4,
                delay: 0.2,
                stagger: 0.01,
                ease: 'power2.inOut',
            }),
            gsap.to('.name-main', {
                y: 0,
                duration: 0.4,
                stagger: 0.01,
                ease: 'power4.out',
            }),
        ];
    };

    const { contextSafe } = useGSAP(() => {
        const tl = gsap.timeline();
        tl.add(
            gsap.from('.letter', {
                opacity: 0,
                duration: 0.1,
                stagger: 0.1,
            })
        );

        nameHoverTween().map((tween) => {
            tl.add(tween);
        });

        tl.add(
            gsap.from('.cta', {
                y: 100,
                duration: 0.5,
                delay: 0.2,
                ease: 'power2.inOut',
            })
        );
    }, []);

    const animateName = contextSafe(() => {
        const tl = gsap.timeline();
        nameHoverTween().map((tween) => {
            tl.add(tween);
        });
    });

    return (
        <div className="bg-primary">
            <div className="container mx-auto flex justify-center items-center hero-section">
                <div className="h-full text-white flex justify-center items-center">
                    <div className="hero-text text-4xl ">
                        <p className="mb-5 whitespace-pre-wrap ">
                            {text1.split('').map((x) => (
                                <span className="letter inline-block" key={x}>
                                    {x}
                                </span>
                            ))}
                            <span
                                onMouseEnter={animateName}
                                className="whitespace-pre-wrap ml-4 text-accent text-5xl font-extrabold "
                            >
                                {text2.split('').map((x) => (
                                    <span
                                        className="letter inline-block name-main pers"
                                        key={x}
                                    >
                                        {x}
                                    </span>
                                ))}
                            </span>
                        </p>
                        <p className="whitespace-pre-wrap">
                            {text3.split('').map((x) => (
                                <span className="letter inline-block" key={x}>
                                    {x}
                                </span>
                            ))}
                        </p>
                        <div className="overflow-hidden">
                            <button className="cta text-xl py-3 px-5 hover:bg-accent hover:text-primary transition-colors duration-300 font-semibold text-accent border-2 rounded-sm border-accent mt-10">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex self-baseline h-full ">
                    <Image
                        objectFit="contain"
                        src={image}
                        alt="profile"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
