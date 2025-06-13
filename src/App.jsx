import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import phonebook from "./data/phonebook.json";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || phonebook;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = (text) => {
    setFilter(text);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: nanoid() }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Section>
      <Container>
        <ContactForm onSubmit={addContact} />
        <SearchBox handleChangeFilter={handleChangeFilter} />
        <ContactList
          phonebook={filteredContacts}
          deleteContact={deleteContact}
        />
      </Container>
    </Section>
  );
};

export default App;
