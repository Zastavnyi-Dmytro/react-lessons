import { capsules } from "./capsules";
import CapsulesItem from "./CapsulesItem";

function CapsulesComponent() {
  return (
    <div>
      <h1>Capsules</h1>
      {capsules
        .filter(capsule => capsule.status === "active")
        .map(capsule => (
          <CapsulesItem key={capsule.capsule_serial} capsule={capsule} />
        ))}
    </div>
  );
}

export default CapsulesComponent;
