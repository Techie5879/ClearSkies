import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import AirIcon from '@mui/icons-material/Air';
import './navbar.css'

export const Navbar = () => {
	const navigate = useNavigate();
	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton size='large' edge='start' color='inherit' aria-label='logo'>
					<AirIcon />
				</IconButton>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					CLEAR SKIES
				</Typography>
				<Stack direction='row' spacing={2}>
					<Button color='inherit' onClick={()=>navigate('/')}>Home</Button>
					<Button color='inherit' onClick={()=>navigate('/education')}>Education</Button>
					<Button color='inherit' onClick={()=>navigate('/news')}>News</Button>
					<Button color='inherit' onClick={()=>navigate('/predictor')}>Predictor</Button>
					<Button color='inherit' onClick={()=>navigate('/about')}>About</Button>
										
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar