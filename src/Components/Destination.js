import React from 'react';
import style from '../Styles/destination.module.css';
import locationIcon from '../placeholder.png';

export default function Destination(props) {
  const { image, icon, country, location, title, date, description } = style;
  return (
    <div className={style.container}>
      <img className={image} alt={props.name} src={props.imageUrl}></img>
      <div className={style.locationContainer}>
        <img className={icon} alt='icon' src={locationIcon}></img>
        <p className={country}>{props.location.toUpperCase()}</p>
        <a className={location} href={props.googleMapsUrl}>
          View on Google maps
        </a>
      </div>
      <div className={style.descriptionContainer}>
        <h2 className={title}>{props.title}</h2>
        <p className={date}>
          {props.startDate} - {props.endDate}
        </p>
        <p className={description}>{props.description}</p>
      </div>
    </div>
  );
}

//     title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
// }
