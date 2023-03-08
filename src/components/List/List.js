import Button from "../Button/Button";

function List({ activities, weather, onDeleteActivity }) {
  return (
    <>
      <h1>
        {weather.isGoodWeather
          ? "The weather is awesome!Go outside and"
          : " Bad weather outside! Here's whatyou can do now:"}
      </h1>
      <ul>
        {activities
          .filter((act) => act.isForGoodWeather === weather.isGoodWeather)
          .map((activity) => (
            <li key={activity.id}>
              {activity.name}{" "}
              <button
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                {"X"}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default List;
