import { Container } from '@mui/system';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

import Header from './components/Header';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts , setContacts] = useState(contactsJSON);
  const addContact = (data) => {
    setContacts([...contacts,data])
  console.log(data)

  }
  
  // const contactList = contactsJSON;
  // contactList.map((list) => {
  //   console.log(list.name)
  // })
  return (
    <div className="App">
      <Container fixed>
      <Header/>
      <Grid container spacing={12}>
      <Grid item xs={6}>
        <Item>
        <ContactForm newContact={addContact} />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          {
            contacts?.map((contact,index) => (
              <Contact data={contact} key={index}/>
              ))
          }
        </Item>
      </Grid>
    </Grid>
      </Container>
    </div>
  );
};

export default App;
