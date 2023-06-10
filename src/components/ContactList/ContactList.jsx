import css from './contact-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk, deleteContactThunk } from 'redux/operations';

const ContactsList = () => {
  const selectContacts = useSelector(state => state.contacts.items);
  const selectFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const result = selectContacts.filter(item => {
    return item.name.toLowerCase().includes(selectFilter.toLowerCase());
  });

  const contact = result?.map(item => (
    <li key={item.id} className={css.item}>
      <p className={css.contact}>
        {item.name}: {item.phone}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          dispatch(deleteContactThunk(item.id));
        }}
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={css.list}>{contact}</ul>;
};

export default ContactsList;
