import React, { useState, useEffect } from 'react';
import ResponseItem from 'models/ResponseItem';
import AnalyticsChart from './AnalyticsChart';
import './Analytics.css';

const data = [
  new ResponseItem({ id: 'id1', date: '2019-01-20', value: 503, code: '' }),
  new ResponseItem({ id: 'id2', date: '2019-01-21', value: 291, code: '' }),
  new ResponseItem({ id: 'id3', date: '2019-01-22', value: 817, code: '' }),
  new ResponseItem({ id: 'id4', date: '2019-01-23', value: 582, code: '' }),
];

export default function Analytics(props) {
  const [observations, setObservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchObservations = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setObservations(data);
      setIsLoading(false);
    };

    fetchObservations();
  }, []);

  return (
    (isLoading && <h2>Loading...</h2>) ||
    <div className="Analytics">
      <header className="Analytics__header">
        <h1>Analytics</h1>
      </header>
      <div className="Analytics__pghd">
        <h2>PGHD</h2>
        <div className="Analytics__pghd-charts">
          <AnalyticsChart title="Surveys Chart" data={observations} />
          <AnalyticsChart title="Activity Chart" data={observations} />
          <AnalyticsChart title="Sleep Chart" data={observations} />
          <AnalyticsChart title="Blood Pressure Chart" data={observations} />
        </div>
      </div>
      <div className="Analytics__ehr">
        <h2>EHR Events</h2>
        <form>
          <ul className="Analytics__ehr-checkboxes">
            <li>
              <label>
                <input type="checkbox" />
                {' '} Surveys
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                {' '} Activity
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                {' '} Sleep
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                {' '} Blood Pressure
              </label>
            </li>
          </ul>
        </form>
        <h3>Blood Pressure</h3>
        <h3>Conditions</h3>
        <h3>Lab Test (Glucose)</h3>
        <h3>Body Weight</h3>
      </div>
    </div>
  );
};
