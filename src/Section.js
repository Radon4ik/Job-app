import React from 'react';
import PropTypes from "prop-types";

const Section = (props) => {
    return (
            <section className="posts">
                <div className="container">
                    <h1>
                        Posts
                    </h1>
                    <ul className="list">
                        {props.titleList.map((item, ) =>  {
                                return (
                                    <li key={item['title']} className='list__item'>
                                        <h2>{item['title']}</h2>
                                        <p>{item['text']}</p>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </section>
    );
}






Section.propTypes = {titleList: PropTypes.arrayOf(PropTypes.object).isRequired,}
export default Section;
