// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';

const ContactForm = ({newContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name,setName] = useState('');
    const [photo,setPhoto] = useState("https://placekitten.com/200/300");
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const handleSubmit = () => {
        newContact({name,photo,phone,email});
        console.info("sukses")
    }
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     let newlistContact = {name,photo,phone,email};
    //     newContact.handleSubmit(newlistContact);
    // }
    return (
        <>
         <Card sx={{ minWidth: 275 }}>
        <div>
        <TextField  id="full-width-text-field" required label="Nama"  value={name} onChange={(e) => setName(e.target.value)} margin="normal" fullWidth/>
        </div>
        <div>
        <TextField  id="full-width-text-field"   label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}  margin="normal" fullWidth />
        </div>
        <div>
        <TextField required id="outlined-required"  label="Email" value={email} onChange={(e) => setEmail(e.target.value)}  margin="normal" fullWidth/>
        </div>
        <div>
        <TextField required id="outlined-required"   label="Photo URL" value={photo} onChange={(e) => setPhoto("https://placekitten.com/")}  margin="normal" fullWidth/>
        </div>
         <Button fullWidth onClick={handleSubmit} >Submit</Button>
         </Card>
        </>
    );
};

export default ContactForm;