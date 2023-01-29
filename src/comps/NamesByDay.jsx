const randomizeArray = (array) => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const assignNamesByDay = (names, numberOfNamesPerDay) => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const randomizedNames = randomizeArray(names);
  const namesByDay = {};

  for (let i = 0; i < daysOfWeek.length; i++) {
    namesByDay[daysOfWeek[i]] = randomizedNames.slice(
      i * numberOfNamesPerDay,
      (i + 1) * numberOfNamesPerDay
    );
  }

  return namesByDay;
};

const NamesByDay = ({ names, numberOfNamesPerDay = 1 }) => {
  const namesByDay = assignNamesByDay(names, numberOfNamesPerDay);
  return (
    <div>
      <ul>
        {Object.entries(namesByDay).map(([day, names], index) => (
          <li className="p-4" key={index}>
            <div className="font-bold">{day}:</div>
            {
              <div>
                {names.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NamesByDay;
