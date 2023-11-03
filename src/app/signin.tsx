import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignIn() {
    return (
        <div className='signin'> 
                    <h1>Log in Page</h1>
                    <TextField
                        className='textinput'
                        required
                        label='Email Address'
                        placeholder='Enter your email address'
                        />
                    <TextField
                        className='textinput'
                        label='Password'
                        type='password'
                        autoComplete='current-password'
                    />
                    <Button 
                        variant='contained'
                        className='textinput'
                    >
                            Log In
                    </Button>
        </div>
    )
}

            
