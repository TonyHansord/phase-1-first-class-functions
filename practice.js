const runFiveMiles = () => console.log("Go for a five-mile run");
const liftWeights = () => console.log("Pump iron");
const swimFortyLaps = () => console.log("Swim 40 laps");
const exerciseRoutine = (postRunActivity) => {
  runFiveMiles();
  postRunActivity();
};

function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise);

  // we could give this function a name if we wanted to, but since
  // it's only available _inside_ morningRoutine(), we don't need to
  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}

exerciseRoutine(() => console.log("Stretch! Work that core!"));

const Monday = () => exerciseRoutine(liftWeights);
