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

const Layout = ({ children }) => (
    <div>
        <Head>
           <title>Marko Križan - Home Page</title> 
        </Head>
        <div id="particles-js">
            {isBrowser() && <Particles params={particlesConfig}/>}
        </div>
        <Nav/>
        {children}
    </div>
);

export default Layout;
