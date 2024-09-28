import React from "react";
import { FormattedNumber, FormattedDate, FormattedMessage } from 'react-intl';

const Job = (props) => {
  const { name, company, salary, city, date, views } = props.offer;
  const userLocale = navigator.language;

  // Determinamos el formato para "millón" o "millones"
  const formattedSalary = userLocale.startsWith('es') 
    ? `${salary} ${salary === 1 ? 'millón' : 'millones'}`
    : `${salary} million`;

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{name}</td>
      <td>{company}</td>
      <td>{formattedSalary}</td>
      <td>{city}</td>
      <td>
        <FormattedDate
          value={new Date(date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={views} />
      </td>
    </tr>
  );
};

export default Job;
