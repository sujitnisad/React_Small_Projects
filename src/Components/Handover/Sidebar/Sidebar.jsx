import "./Sidebar.css";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
const Sidebar = (props) => {
  const colors = ["#D1E9F6", "#FFFDD0", "#D3D3D3"];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      <IoIosAddCircle
        className="img"
        size={50}
        onClick={() => setListOpen(!listOpen)}
      />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
