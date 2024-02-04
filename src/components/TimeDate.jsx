import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function TimeDate() {
  const currentTime = "10:10";
  // new Date().toLocaleTimeString(); // Get current time

  return (
    <div className="flex items-center rounded-lg bg-blue-500 p-4 text-white">
      <div className="mr-4 bg-white rounded-full p-2">
        <FontAwesomeIcon icon={faClock} className="text-blue-500 h-6 w-6" />{" "}
        {/* Use FontAwesomeIcon here */}
      </div>
      <span className="font-bold">Wednesday</span>
      <span className="ml-4">{currentTime}</span>
    </div>
  );
}

export default TimeDate;
