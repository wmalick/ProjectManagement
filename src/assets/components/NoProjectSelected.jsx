import noProjectImage from "../../assets/no-projects.png";
import AddProjectButton from "./AddProjectButton.jsx";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-full">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      ></img>
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project of get started with a new one
      </p>
      <p className="mt-8">
        <AddProjectButton onClick={onStartAddProject}>
          Create new project
        </AddProjectButton>
      </p>
    </div>
  );
}
