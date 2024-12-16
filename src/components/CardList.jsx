import { tasks } from "../dataBase";
import Card from "./card";

export const CardList = () => {
  return (
    <div>
      {tasks.length >= 1 ? (
        <ul>
          {tasks.map((task) => (
            <Card key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p> no hay tareas para mostrar</p>
      )}
    </div>
  );
};
