import { AiFillPhone } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <div className={s.contactCard}>
      <div className={s.contactInfo}>
        <p className={s.contactLine}>
          <FaUserSecret />
          {name}
        </p>
        <p className={s.contactLine}>
          <AiFillPhone />
          {number}
        </p>
      </div>
      <button
        className={s.deleteButton}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
