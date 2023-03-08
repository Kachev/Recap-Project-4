
import "./List.css";

function List({ activities, weather, onDeleteActivity }) {
  return (
    <>
      <h2 className="headline">
        {weather.isGoodWeather
          ? "The weather is awesome!Go outside and"
          : " Bad weather outside! Here's whatyou can do now:"}
      </h2>
      <ul >
        {activities
          .filter((act) => act.isForGoodWeather === weather.isGoodWeather)
          .map((activity) => (
            <li className="list" key={activity.id}>
              <span className="list-item">{activity.name}</span>
              <button
                className="delete-button"
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
