'use strict';
import { formatDate } from '../utils/date';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HOST, TOKEN, apiRoutes } from '../contents/requestData';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${HOST}${apiRoutes.list}`, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let currentItem = data.find((item) => item.id === id);
        setDetails(currentItem);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading</p>;

  if (!details) {
    return <p>not found</p>;
  }
  const {
    description,
    title,
    salary,
    phone,
    email,
    address,
    employment_type,
    benefits,
    updatedAt,
    name,
    pictures,
    location,
  } = details;

  return (
    <main>
      <>
        {/* start hero */}
        <section className="hero">
          {/* start header */}
          <header className="header">
            <div className="container">
              <div className="header__container">
                <div className="header__head">
                  <h2 className="header__title">Job Details</h2>
                  <ul className="header__list">
                    <li className="header__item">
                      <button className="header__btn">
                        <img
                          className="header__img"
                          src="../img/Bookmark.svg"
                        />
                        Save to my list
                      </button>
                      <button className="header__btn header__btn--invisible">
                        <img
                          className="header__img"
                          src="../img/Star-small.svg"
                        />
                        Save to my list
                      </button>
                    </li>
                    <li className="header__item">
                      <button className="header__btn header__btn-share">
                        <img className="header__img" src="../img/Share.svg" />
                        Share
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="border-bottom"></div>
                <ul className="header__list-invisible">
                  <li className="header__item">
                    <button className="header__btn-invisible">
                      <img
                        className="header__img"
                        src="../img/Star-small.svg"
                      />
                      Save to my list
                    </button>
                  </li>
                  <li className="header__item">
                    <button className="header__btn-share">
                      <img className="header__img" src="../img/Share.svg" />
                      Share
                    </button>
                  </li>
                </ul>
                <button className="btn-apply-now">Apply now</button>
              </div>
            </div>
          </header>
          {/* end header */}

          <div className="container">
            <div className="hero__container">
              <div className="hero__wrapper">
                <div className="hero__text-box">
                  <h1 className="hero__title">{title}</h1>
                  <p className="hero__time">{formatDate(updatedAt)}</p>
                  <ul className="hero__list-salary">
                    <li className="hero__item">{salary}</li>
                    <li className="hero__item-grey">Brutto, per year</li>
                  </ul>
                </div>
              </div>
              <p className="hero_txt">{description}</p>
            </div>
          </div>
        </section>
        {/* end hero */}

        {/* start Responsibilities */}
        <section className="responsibilities">
          <div className="container ">
            <div className="responsibilities__container">
              <h3 className="responsibilities__title">Responsibilities</h3>
              <p className="responsibilities__description">{description}</p>
            </div>
          </div>
        </section>
        {/* end Responsibilities */}

        {/* start Benefits */}
        <section className="benefits">
          <div className="container ">
            <div className="benefits__container">
              <div className="benefits__title">Compensation & Benefits:</div>
              <p className="benefits__txt">
                Our physicians enjoy a wide range of benefits, including:
              </p>
              <ul className="benefits__list">
                <li className="benefits__item">
                  Very competitive compensation package with bonuses
                </li>
                <li className="benefits__item">
                  Medical, Dental, and Vision Insurance
                </li>
                <li className="benefits__item">
                  Occurrence-based Malpractice Coverage
                </li>
                <li className="benefits__item">
                  Short-term and Long-term Disability Insurance and life
                  insurance
                </li>
              </ul>
              <button className="btn-apply-now btn-apply-now-bottom">
                Apply now
              </button>
            </div>
          </div>
        </section>
        {/* end Benefits */}

        {/* start Additional*/}
        <section className="additional">
          <div className="container">
            <div className="additional__container">
              <h3 className="additional__title">Additional info</h3>
              <div className="border-bottom"></div>
              <p className="additional__txt">Employment type</p>
              <div className="additional__buttons-employment">
                {employment_type.map((txt) => (
                  <button className="additional__btn" key={txt}>
                    {txt}
                  </button>
                ))}
              </div>
              <h4 className="additional__title-benefits">Benefits</h4>
              <div className="additional__buttons-benefits">
                {benefits.map((txt) => (
                  <button
                    className="additional__btn additional_btn-yellow"
                    key={txt}
                  >
                    {txt}
                  </button>
                ))}
              </div>
              <h3 className="additional__title">Attached images</h3>
              <div className="border-bottom"></div>
              <div className="additional__images">
                {pictures.map((img) => (
                  <div className="additional__img-box" key={nanoid()}>
                    <img className="additional__img" src={img} />
                  </div>
                ))}
              </div>
              <Link className="additional__btn-return" to="/">
                &lt; RETURN TO JOB BOARD
              </Link>
            </div>
          </div>
        </section>
        {/* start map */}
        <section className="map">
          <div className="container">
            <div className="map__container">
              <h1 className="map__title">Contact</h1>
              <div className="border-bottom"></div>
              <div className="map__location">
                <address className="map__wrapper">
                  <h1 className="map__name">
                    Department name.
                    <br />
                    {name}
                  </h1>
                  <a
                    target="_blank"
                    href={`https://www.google.com/maps/search/?api=1&query=${location.lat}%2C${location.long}`}
                    className="map__address"
                  >
                    <img className="map__shape" src="../img/Location.svg" />
                    {address}
                  </a>
                  <br />
                  <a className="map__tel">{phone}</a>
                  <br />
                  <a className="map__mailto">{email}</a>
                </address>
              </div>
            </div>
          </div>
        </section>
        {/* end map */}
      </>
    </main>
  );
};

export default Details;
