import React, { useRef } from 'react'
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const ShocaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

   
    useGSAP(()=>{

        const projects = [project1Ref.current, project2Ref.current,project3Ref.current];

        projects.forEach((card,index)=>{
            gsap.fromTo(card,
                {
                    y:50,
                    opacity:0
    
                },
                {
                    y:0, 
                    opacity: 1,
                    duration: 1,
                    delay : 0.3 * (index + 1),
                    scrollTrigger: {
                       trigger: card,
                       start : 'top bottom-=100',
                    }
    
                }
            )
    
        })



      gsap.fromTo(sectionRef.current,
        {
            opacity:0

        },
        {
            opacity:1,
            duration:1.5
        }
    )
    },[])


  return (
    <section id='work' ref={sectionRef}  className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* left side  */}
                <div ref={project1Ref} className='first-project-wrapper' >
                    <div className='image-wrapper'>
                        <img src="/images/project1.png" alt="project1" />
                    </div>
                    <div className='text-content'>
                        <h2 >
                            On demand Rides made simple with a powerfull, user-Friendly App called Ryde
                        </h2>
                        <p className='text-white-50 md:text-xl'>
                            an app build with react Native, Expo and tailwindCSS for a fast , user-Friendly experience.
                        </p>

                    </div>
                </div>
                {/* right side */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div ref={project2Ref} className='project'>
                        <div className='image-wrapper bg-[#ffefdb]'>
                        <img src="/images/project2.png" alt="" />
                        </div>
                        <h2>Library management palateform</h2>
                       
                      
                    </div>
                    <div ref={project3Ref} className='project'>
                        <div className='image-wrapper bg-[#ffe7db]'>
                        <img src="/images/project3.png" alt="" />
                        </div>
                        <h2>YC- directory showcase app</h2>
                        
                      
                    </div>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default ShocaseSection
