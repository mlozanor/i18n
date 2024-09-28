import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";

const JobsList = () => {
  const userLocale = navigator.language;
  const headerClass = userLocale.startsWith('es') ? "thead-light" : "thead-dark";

  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 1250,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 2000000,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 850,
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead className={headerClass}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" defaultMessage="Position" />
            </th>
            <th scope="col">
              <FormattedMessage id="Company" defaultMessage="Company" />
            </th>
            <th scope="col">
              <FormattedMessage id="Salary" defaultMessage="Salary" />
            </th>
            <th scope="col">
              <FormattedMessage id="City" defaultMessage="City" />
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate" defaultMessage="Publication date" />
            </th>
            <th scope="col">
              <FormattedMessage id="Views" defaultMessage="No. of views" />
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
