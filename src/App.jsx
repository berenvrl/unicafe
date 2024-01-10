import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const handleGoodClick = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
    };
    setClicks(newClicks);
  };
  const handleBadClick = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
    };
    setClicks(newClicks);
  };
  const handleNeutralClick = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
    };
    setClicks(newClicks);
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const averageScore = (clicks.good - clicks.bad) / totalFeedback;
  const positivePercentage = (clicks.good / totalFeedback) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onhandleClick={handleGoodClick} />
      <Button text="neutral" onhandleClick={handleNeutralClick} />
      <Button text="bad" onhandleClick={handleBadClick} />
      <Statistic
        averageScore={averageScore}
        positivePercentage={positivePercentage}
        clicks={clicks}
        totalFeedback={totalFeedback}
      />
    </div>
  );
}

const Button = ({ onhandleClick, text }) => {
  return <button onClick={onhandleClick}>{text}</button>;
};

const Statistic = ({
  clicks,
  positivePercentage,
  averageScore,
  totalFeedback,
}) => {
  return (
    <>
      <h1>statistics</h1>
      {totalFeedback > 0 && (
        <div>
          <StatisticLine text="good" value={clicks.good} />
          <StatisticLine text="neutral" value={clicks.neutral} />
          <StatisticLine text="bad" value={clicks.bad} />
          <StatisticLine
            text="all"
            value={clicks.bad + clicks.good + clicks.neutral}
          />
          <StatisticLine text="average" value={averageScore} />
          <StatisticLine text="positive" value={`${positivePercentage} %`} />
        </div>
      )}
      {totalFeedback === 0 && <p>No feedback given</p>}
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text} </td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
