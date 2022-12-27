import React, { useEffect } from 'react'
import HistoryHeroD from '../photos/OurHistory/history_hero_desktop_1260x560_hero-desktop.jpg'
import HistoryHeroM from '../photos/OurHistory/history_hero_desktop_1260x560_hero-mobile.jpg'
import { Button } from 'react-bootstrap'

function OurHistory () {

useEffect(() => {
    window.scrollTo(0, 0)
}, [])

    return (
        <>
            {/* <div className='mainContainer'>
                <div className='contentContainer'>
                    <img className="imgCenter" src={HistoryHeroD} alt=""></img>
                    <div className='mainText'>
                        <h1 className='h1h1h1'><strong>
                            test
                        </strong></h1>
                        <p>
                            1q
                        </p>
                        <Button variant="warning">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div> */}

{/* TAILWIND sec */}
            <div className='pl-3 pr-3 flex py-20 '>
                <div className='flex-col mx-auto'>
                    <h1 className='text-5xl pb-7 text-center font-extrabold'>
                        Our History
                    </h1>

                    <img className="max-lg:hidden" src={HistoryHeroD} alt=""></img>
                    <img className="min-[1024px]:hidden" src={HistoryHeroM} alt=""></img>

<div className='max-w-[1000px]'>
                    <div className='pt-28'>
                        <h1 className='text-base pr-48 pl-1'>
                            From drive-thru restaurants to Chicken McNuggets to college credits from Hamburger U, we’ve had quite a journey. And we’re still going. But to take a look into our past, we need to share the story of one man.
                        </h1>
                    </div>

                        <section className='flex flex-col pt-40'>
                            <div className='[&>p]:-mt-8'>
                                <p className='text-[37px] pb-7 font-bold'>The Ray Kroc Story</p>
                                <p>How do you create a restaurant business and become an overnight success at the age of 52? As Ray Kroc said, “I was an overnight success alright, but 30 years is a long, long night.”</p>
                            </div>

                            <div className='pt-8'>
                                <p className='text-[37px] pb-7 font-bold'>Origins</p>
                                <p>In 1917, 15-year-old Ray Kroc lied about his age to join the Red Cross as an ambulance driver, but the war ended before he completed his training. He then worked as a piano player, a paper cup salesman and a Multimixer salesman. In 1954, he visited a restaurant in San Bernardino, California that had purchased several Multimixers. There he found a small but successful restaurant run by brothers Dick and Mac McDonald, and was stunned by the effectiveness of their operation. The McDonald’s brothers produced a limited menu, concentrating on just a few items – burgers, fries and beverages – which allowed them to focus on quality and quick service.</p>
                                <p>They were looking for a new franchising agent and Kroc saw an opportunity. In 1955, he founded McDonald’s System, Inc., a predecessor of the McDonald’s Corporation, and six years later bought the exclusive rights to the McDonald’s name and operating system. By 1958, McDonald’s had sold its 100 millionth hamburger.</p>
                            </div>

                            <div className='pt-8'>
                                <p className='text-[37px] pb-7 font-bold'>A Unique Philosophy</p>
                                <p>Ray Kroc wanted to build a restaurant system that would be famous for providing food of consistently high quality and uniform methods of preparation. He wanted to serve burgers, fries and beverages that tasted just the same in Alaska as they did in Alabama.</p>
                                <p>To achieve this, he chose a unique path: persuading both franchisees and suppliers to buy into his vision, working not for McDonald’s but for themselves, together with McDonald’s. He promoted the slogan, “In business for yourself, but not by yourself.” His philosophy was based on the simple principle of a 3-legged stool: one leg was McDonald’s franchisees; the second, McDonald’s suppliers; and the third, McDonald’s employees. The stool was only as strong as the three legs that formed its foundation.</p>
                                <p className='text-lg text-red-600'>“If I had a brick for every time I’ve repeated the phrase Quality, Service, Cleanliness and Value, I think I’d probably be able to bridge the Atlantic Ocean with them.” – Ray Kroc</p>
                            </div>

                            <div className='pt-8'>
                                <p className='text-[37px] pb-7 font-bold'>System First</p>
                                <p>First and foremost, Kroc advocated adherence to the system approach. So while many of McDonald’s most famous menu items – like the Filet-O-Fish, Big Mac, and Egg McMuffin – were created by franchisees, the McDonald’s operating system required franchisees to follow the core McDonald’s principles of quality, service, cleanliness and value.</p>
                            </div>

                            <div className='pt-8'>
                                <p className='text-[37px] pb-7 font-bold'>System First</p>
                                <p>McDonald’s <span className="underline">passion for quality</span> meant that ingredients were tested, tasted and perfected to fit the operating system. Kroc shared his vision of McDonald’s future, selling his early suppliers on future volumes. They believed in him and the restaurant boomed.</p>
                                <p>Again, Ray Kroc was looking for a partnership, and he managed to create the most integrated, efficient and innovative supply system in the food service industry. These supplier relationships have flourished over the decades. In fact, many McDonald’s suppliers operating today first started business with a handshake from Ray Kroc.</p>
                            </div>
                            {/* ^^^^^^^^^^ to add link to "passion for quality" */}

                            <div className='pt-8'>
                                <p className='text-[37px] pb-7 font-bold'>Hamburger University</p>
                                <p>In 1961, Kroc launched a training program, later called Hamburger University, at a new McDonald’s restaurant in Elk Grove Village, Illinois. There, franchisees were trained on the proper methods for running a successful McDonald’s restaurant. Hamburger U utilized a research and development laboratory in nearby Addison, Illinois to develop new cooking, freezing, storing and serving methods. Today, more than 275,000 franchisees, managers, and employees have graduated from the program.</p>
                            </div>

                            <div className='pt-8'>
                                <p className='text-[37px] pb-7 font-bold'>The Legend Lives On</p>
                                <p>Right up until he died on January 14, 1984, Ray Kroc never stopped working for McDonald’s. His legacy continues to this day, providing McDonald’s customers with great tasting, affordable food; crew and franchisees with opportunities for growth; and suppliers with a shared commitment to provide the highest quality ingredients and products.</p>
                                <p>From his passion for innovation and efficiency, to his relentless pursuit of quality, to his many charitable contributions, Ray Kroc’s legacy continues to be an inspirational and integral part of McDonald’s – today and into the future.</p>
                            </div>

                            <div className='pt-8'>
                                <p className='text-[37px] pb-7 font-bold'>One Milestone At A Time</p>
                                <p>From the first drive-thru to the first Chicken McNuggets, we’ve had a
                                    lot of memorable milestones.
                                    For a snapshot of our accomplishments, take a look at
                                    <span className="underline text-blue-800"> our interactive History Timeline.</span></p>
                            </div>
                        </section>

                        <div className='pt-28'>
                            <p className='text-3xl pb-7'>Sources</p>
                            <p className='text-[9.5px]'>Grinding it Out: The Making of McDonald’s by Ray A. Kroc, ©Ray A. Kroc 1977.</p>
                            <p className='text-[9.5px]'>McDonalds: Behind the Golden Arches by John F. Love ©John F. Love 1995.</p>
                            <p className='text-[9.5px]'>aboutmcdonalds.com 2009.</p>
                        </div>


                    </div>
                </div>
                </div>

        </>
    )
}

export default OurHistory