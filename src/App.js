import { useEffect, useState } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form";
import "./App.css";
import List from "./components/List/List";

function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState({});
  const url = "https://example-apis.vercel.app/api/weather";
  useEffect(() => {
    async function startFetching() {
      const respnose = await fetch(url);
      const data = await respnose.json();
      setWeather(data);
      console.log(data);
    }
    startFetching();
  }, [activities]);

  function handleAddActivity(event) {
    event.preventDefault();
    const isChecked = event.target.elements["good-or-bad-weather"].checked;
    const nameOfActivity = event.target.elements.name.value;
    const newActivity = {
      id: uid(),
      name: nameOfActivity,
      isForGoodWeather: isChecked,
    };
    setActivities([...activities, newActivity]);
    event.target.reset();
    event.target.elements.name.focus();
  }

  function handleDeleteActivity(id) {
    const newActivity = activities.filter((activity) => activity.id !== id);
    setActivities([...newActivity]);
  }

  return (
    <div className="App">
      <h1 className="title">
        <span className="condition">{weather.condition}</span>
        <span className="temperature">{weather.temperature} °C</span>
      </h1>
      <ul>
        <List
          activities={activities}
          weather={weather}
          onDeleteActivity={handleDeleteActivity}
        />
      </ul>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
