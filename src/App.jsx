import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import './card.css'

function followMe() {
  window.open('https://github.com/PEPAXD?tab=stars', '_blank');
  setTimeout(() => window.open('https://www.instagram.com/mauropepa97/', '_blank'), 500);
  setTimeout(() => window.open('https://www.linkedin.com/in/mauro-pepa-02b57a194/', '_blank'), 1000);
}

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <div className="icon">
          <img src="https://avatars.githubusercontent.com/u/107534710?v=4" alt="Developer" />
        </div>
        <strong> MAURO PEPA </strong>
        <div className="card_body"> This is my first project using React and Vite </div>

        <span onClick={followMe}>
          Follow Me 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
          </svg>
        </span>
      </div>
    </>
  )
}

export default App
