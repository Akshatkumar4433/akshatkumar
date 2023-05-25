import React from 'react'
import reactIcon from '../images/skillsIcons/atom.png'
import html5Icon from '../images/skillsIcons/html-5.png'
import css3Icon from '../images/skillsIcons/css-3.png'
import gitIcon from '../images/skillsIcons/git.png'
import gitHubIcon from '../images/skillsIcons/github.png'
import tailwindIcon  from '../images/skillsIcons/tailwind.png'
import nodejsIcon from '../images/skillsIcons/nodejs.png'

function About() {
  return (
    <div className=' h-screen relative w-full'>
        <div className=' max-w-md absolute left-20 right-20 top-40 border-dotted border-4 p-2 pl-4'>
            <p className='tablet:text-xl desktop:text-2xl  text-[#BA90C6] font-about'>
                I'm Akshat Kumar computer programmer and web developer.
                I am always looking for new challenges and opportunites to learn and grow.
                Have fun and check out my Projects.
            </p>
        </div>
        <div className='max-w-md absolute tablet:left-5 tablet:top-40 ,desktop:right-80  border-dotted border-4'>
        <img src = {html5Icon} className = 'h-10 w-10' alt = 'html5-icon'/>
        <img src = {css3Icon} className = 'h-10 w-10' alt = 'css3-icon'/>
        <svg className = 'h-10 w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="javascript">
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path>
          <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg>
          <svg className='h-10 w-10'
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="npm"><path d="m12 12.534v-2.663h-1.334v2.666zm12-5.334h-24v8h6.666v1.334h5.334v-1.333h12zm-17.334 1.334v5.337h-1.333v-4h-1.334v4h-2.666v-5.334zm6.667 0v5.337h-2.666v1.334h-2.666v-6.666zm9.333 0v5.337h-1.333v-4h-1.334v4h-1.334v-4h-1.333v4h-2.667v-5.334z"></path></svg>
           
          <img src = {reactIcon} className = 'h-10 w-10' alt = 'react-icon'/>
          <img src = {tailwindIcon} className = 'h-10 w-10' alt = 'tailwind-icon'/>
          <img src = {gitIcon} className = 'h-10 w-10' alt = 'git-icon'/>
          <img src = {gitHubIcon} className = 'h-10 w-10' alt = 'github-icon'/>
          
        </div>
    </div>
  )
}

export default About