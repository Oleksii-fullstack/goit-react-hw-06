import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ phonebook, deleteContact }) => {
  return (
    <ul>
      {phonebook.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            deleteContact={deleteContact}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
