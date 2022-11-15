'use strict';

import React, { useEffect, useState } from 'react';
import { HOST, TOKEN, apiRoutes } from '../contents/requestData';
import ListItem from '../components/ListItem';

const List = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${HOST}${apiRoutes.list}`, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <ul className="jobs">
      {jobs.map(
        ({ id, name, title, pictures, address, updatedAt, location }) => {
          return (
            <ListItem
              id={id}
              name={name}
              title={title}
              pictures={pictures}
              address={address}
              updatedAt={updatedAt}
              location={location}
              key={id}
            />
          );
        }
      )}
    </ul>
  );
};

export default List;
