import React from 'react';
import Span from '../../atmos/Span/Span';
import ImageRace from '../../atmos/Image/ImageRace';
import H3 from '../../atmos/H3/H3';
import Text from '../../atmos/Text/Text';

const RaceCard = ({ round, date, place, text, srcH, altH, src, alt }) => {
  return (
    <>
      <div className='round'>
        <div className="headerRacing">
          <Span round={round}></Span>
          <Span date={date}></Span>
          <ImageRace src={srcH} alt={altH}></ImageRace>
        </div>
        <div className="content">
          <H3>{place}</H3>
          <Text>{text}</Text>
          <ImageRace src={src} alt={alt}></ImageRace>
        </div>
      </div>
    </>
  )
}

export default RaceCard;
