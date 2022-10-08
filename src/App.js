import { ThemeProvider, createGlobalStyle } from 'styled-components'
import logo from './logo.svg'
import './App.css'

import StyledButton, {
    FancyButton,
    SubmitButton,
    AnimatedLogo,
    DarkButton,
} from './components/Button/Button'

const theme = {
    dark: {
        primary: '#000',
        text: '#FFF',
    },
    light: {
        primary: '#FFF',
        text: '#000',
    },
    fontFamily: 'Segoe UI',
}

const GlobalStyle = createGlobalStyle`
    button {
        font-family: ${props => props.theme.fontFamily}
    }
`

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div className='App'>
                {/* <img src={logo} alt='logo' className='App-logo' /> */}
                <AnimatedLogo src={logo} />
                <StyledButton>Styled Button</StyledButton>
                <div>
                    <br />
                </div>

                <StyledButton variant='outline'>Outline Button</StyledButton>
                <div>
                    <br />
                </div>
                <FancyButton as='a'>Fancy Button</FancyButton>
                <div>
                    <br />
                </div>
                <SubmitButton>Submit</SubmitButton>
                <div>
                    <br />
                </div>
                <SubmitButton variant='outline'>Submit Outline</SubmitButton>
                <div>
                    <br />
                </div>
                <DarkButton>Dark Theme</DarkButton>
            </div>
        </ThemeProvider>
    )
}

export default App
