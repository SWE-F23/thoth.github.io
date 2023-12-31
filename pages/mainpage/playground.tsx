import ResponsiveAppBar from "./AppBar";
import '../../src/app/globals.css';


export default function Editor() {
    return(
        <div className='homepage'>
            <ResponsiveAppBar/>
            <iframe className='code-editor-container-iframe'
                src="https://www.interviewbit.com/embed/snippet/2eeda5a80dcf362d8494"
                title="Interviewbit Ide snippet/2eeda5a80dcf362d8494"
                loading="lazy"
                allow="clipboard-write"
                sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox">       
            </iframe>
        </div>
    );
}