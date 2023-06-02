import React, { useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = React.useState([]);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  console.log(value);

  const { company, dates, duties, title } = jobs[value] || {};

  return (
    <section className="section">
      <div className="btn-container">
        {jobs.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && "active-btn"} `}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <div className="App">
        <h1 className="title">{title}</h1>
        <h3 className="company">{company}</h3>
        <h4 className="dates">{dates}</h4>
        {duties &&
          duties.map((duty, index) => (
            <div key={index} className="job-desc">
              <span class="material-symbols-outlined">
                keyboard_double_arrow_right
              </span>
              <p className="duty">{duty}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default App;
