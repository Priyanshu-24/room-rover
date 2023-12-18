import { IRoom } from "@/backend/models/room";

interface Props {
  room: IRoom;
}

const RoomFeatures = ({ room }: Props) => {
  return (
    <div>
      <h2 className="font-semibold text-xl mt-10 mb-1">Features</h2>
    </div>
  );
};

export default RoomFeatures;
