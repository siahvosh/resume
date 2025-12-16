import {TopCard} from "../../component/topCard/TopCard.tsx";


export const Services = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>

            <TopCard
                title={'The services we offer'}
                description={'The services we offer'}
                image={'https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-165166.jpg?t=st=1740514453~exp=1740518053~hmac=408a495f999804f15a306a18b1947d0922a3056d3346eca2d59ed2d61e524911&w=1480'}
            />
            <div className={'about-body'}>
                <span className={'body-title'}>Services</span>
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