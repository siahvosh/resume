
import './About.css'
import {TopCard} from "../../component/topCard/TopCard.tsx";

export const About = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <TopCard
                title={'Know more about us '}
                description={'Know more about us'}
                // image={'https://img.freepik.com/free-photo/diverse-businesspeople-having-meeting_53876-103954.jpg?t=st=1740507043~exp=1740510643~hmac=456662c1fd31bbdf14620080e0e28e4550ebed81c06f90a3a3486529bde9bfb1&w=2000'}
            />
            <div className={'about-body'}>
                <span className={'body-title'}>Our story</span>
                <span className={'body-description'}>It all started with typography..</span>
                <span className={'body-description'}>Much like good design itself, Kittl’s story starts with typography.</span>
                <span className={'body-description'}>Co-Founder Tobias Saul made a name for himself as a celebrated lettering artist, type designer, and illustrator, working with prestigious clients including Ogilvy and BBDO. Seeing the demand for high-quality hand-drawn typography, Saul teamed up with school friend and entrepreneur Nicolas Heymann to create Heritage Type Co., a vintage font marketplace that quickly gained traction in the design community.</span>
                <span className={'body-description'}>Heritage Type customers loved purchasing unique fonts and frequently asked for the ability to edit fonts on demand. That’s how Heritage Designer was born – Nico and Tobi’s intuitive editing platform that helped users edit fonts and other graphic elements without advanced design skills. The platform attracted over 10,000 users shortly after its release, which highlighted the potential for the tool to serve a wider audience.</span>
                <span className={'body-description'}>Heritage Type customers loved purchasing unique fonts and frequently asked for the ability to edit fonts on demand. That’s how Heritage Designer was born – Nico and Tobi’s intuitive editing platform that helped users edit fonts and other graphic elements without advanced design skills. The platform attracted over 10,000 users shortly after its release, which highlighted the potential for the tool to serve a wider audience.</span>
                <span className={'body-description'}>Heritage Type customers loved purchasing unique fonts and frequently asked for the ability to edit fonts on demand. That’s how Heritage Designer was born – Nico and Tobi’s intuitive editing platform that helped users edit fonts and other graphic elements without advanced design skills. The platform attracted over 10,000 users shortly after its release, which highlighted the potential for the tool to serve a wider audience.</span>
            </div>
        </div>
    )
}