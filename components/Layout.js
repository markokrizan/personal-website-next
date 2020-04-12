import { useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { isBrowser } from '../util'; 
const Particles = dynamic(async () => {
    if(isBrowser()){
        return import('react-particles-js');
    }
});

import Nav from './Nav';
import "../scss/main.scss";
import particlesConfig from '../particles.json';

const Layout = ({ children, showParticles, showNav }) => {
    
    useEffect(() => {
        document.querySelector("body").setAttribute("id", "bg-img");
    }, []);

    return (<div>
        <Head>
           <title>Marko Križan - Home Page</title> 
        </Head>
        {showParticles && isBrowser() && <div id="particles-js">
            <Particles params={particlesConfig}/>
        </div>}
        {showNav && <Nav/>}
        {children}
    </div>)
};

export default Layout;
