import css from './phone-book.module.scss';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

const PhoneBook = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default PhoneBook;
