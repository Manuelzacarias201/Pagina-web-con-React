import React from 'react';
import RaceCard from '../../molecules/RaceCard/RaceCard';

const races = [
    {
        round: 'ROUND 9',
        date: '07-09 JUN',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/canada-flag.png.transform/2col/image.png',
        place: 'Canada',
        text: 'FORMULA 1 AWS GRAND PRIX DU CANADA 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 10',
        date: '21-23 JUN',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/spain-flag.png.transform/2col/image.png',
        place: 'Spain',
        text: 'FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 11',
        date: '20-30 JUN',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/austria-flag.png.transform/2col/image.png',
        place: 'Austria',
        text: 'FORMULA 1 QATAR AIRWAYS AUSTRIAN GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 12',
        date: '05-07 JUL',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-kingdom-flag.png.transform/2col/image.png',
        place: 'Great Britain',
        text: 'FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 13',
        date: '19-21 JUL',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/hungary-flag.png.transform/2col/image.png',
        place: 'Hungary',
        text: 'FORMULA 1 HUNGARIAN GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 14',
        date: '26-28 JUL',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/belgium-flag.png.transform/2col/image.png',
        place: 'Belgium',
        text: 'FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 15',
        date: '23-25 AUG',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/netherlands-flag.png.transform/2col/image.png',
        place: 'Netherlands',
        text: 'FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Netherlands%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 16',
        date: '30-01 AUG-SEP',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/2col/image.png',
        place: 'Italy',
        text: 'FORMULA 1 PIRELLI GRAND PREMIO D´ITALIA 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 17',
        date: '13-15 SEP',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/2col/image.png',
        place: 'Azerbaijan',
        text: 'FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 18',
        date: '20-22 SEP',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/singapore-flag.png.transform/2col/image.png',
        place: 'Singapore',
        text: 'FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Singapore%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 19',
        date: '18-20 OCT',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-flag.png.transform/2col/image.png',
        place: 'United States',
        text: 'FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/United%20States%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 20',
        date: '25-27 OCT',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/mexico-flag.png.transform/2col/image.png',
        place: 'México',
        text: 'FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 21',
        date: '01-03 NOV',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/brazil-flag.png.transform/2col/image.png',
        place: 'Brazil',
        text: 'FORMULA 1 LENOVO GRANDE PRÊMIO DE SÃO PAULO 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 22',
        date: '21-23 NOV',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-flag.png.transform/2col/image.png',
        place: 'Las Vegas',
        text: 'FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Las%20Vegas%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 23',
        date: '29-01 NOV-DEC',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/qatar-flag.png.transform/2col/image.png',
        place: 'Qatar',
        text: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Qatar%20carbon.png.transform/2col/image.png',
    },
    {
        round: 'ROUND 24',
        date: '06-08 DEC',
        srcH: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-arab-emirates-flag.png.transform/2col/image.png',
        place: 'Abu Dhabi',
        text: 'FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2024',
        src: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhabi%20carbon.png.transform/2col/image.png',
    },
];

const Racing = () => {
    return (
        <>
            <h1>Calendario de Carreras</h1>
            <div className="container">
                {races.map((race, index) => (
                    <RaceCard
                        key={index}
                        round={race.round}
                        date={race.date}
                        place={race.place}
                        text={race.text}
                        srcH={race.srcH}
                        altH={`Flag of ${race.place}`}
                        src={race.src}
                        alt={`Circuit of ${race.place}`}
                    />
                ))}
            </div>
        </>
    );
};

export default Racing;
