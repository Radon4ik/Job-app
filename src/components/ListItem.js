'use strict';

import { formatDate } from '../utils/date';
import React from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import rating from '../img/Rating.svg';
import bookmarkSmall from '../img/Bookmark-small.svg';
import localList from '../img/LocationList.svg';

const ListItem = ({
  id,
  name,
  title,
  pictures,
  address,
  updatedAt,
  location,
}) => {
  return (
    <li className="jobs__item">
      <div className="jobs__wrapper">
        <div className="jobs__img-box">
          <img className="jobs__img" src={pictures[0]} />
        </div>
      </div>
      <div className="jobs__content">
        <div className="jobs__text-box">
          <Link className="jobs__title" to={`/page/${id}`}>
            {title}
          </Link>
          <p className="job__name">Department name • {name}</p>
          <a
            className="job__address"
            target="_blank"
            href={`https://www.google.com/maps/search/?api=1&query=${location.lat}%2C${location.long}`}
          >
            <img className="job__location" src={localList} />
            {address}
          </a>
        </div>
        <div className="jobs__rating">
          <img className="jobs__star-rating" src={rating} />
          <img className="jobs__star-rating" src={rating} />
          <img className="jobs__star-rating" src={rating} />
          <img className="jobs__star-rating" src={rating} />
          <img className="jobs__star-rating" src={rating} />
        </div>
        <div className="jobs__posted">
          <button className="jobs__btn">
            <img className="jobs__bookmark" src={bookmarkSmall} />
          </button>
          {formatDate(updatedAt)}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
