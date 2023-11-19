import '../../src/app/globals.css';
import { useRouter } from 'next/navigation';
import ResponsiveAppBar from "./AppBar";

export default function RoadMap() {

    const router = useRouter();

    const routeToHome = () => {
        router.push('./home');
    }

    return(
    <div className='homepage'>
        <ResponsiveAppBar />
        <svg 
        width="100%"
        height="100%"
        viewBox="0 0 1100 1200"
        xmlns="http://www.w3.org/2000/svg" className="roadmap">
                {/* Replace the following code with the actual SVG shapes generated from your data */}
                {/* beginning of map !*/}
        <g>
            <polygon
            points="384.31 189.63 359.95 142.05 94.58 142.01 94.58 236.89 360.14 236.84 384.31 189.63"
            fill="#141416"
            />
        </g>
        <g transform="translate(94, 142)">
        <rect
        style={{ fill: "rgb(20, 20, 22)" }}
        transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,152.22999633789055,308.14999023437497)"
        height="23.62"
        width="16.58"
        y="213.27"
        x="111.15"
        />
        <rect
        style={{ fill: "rgb(20, 20, 22)" }}
        transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,152.22999633789055,213.67999023437494)"
        height="23.62"
        width="16.58"
        y="166.03"
        x="111.15"
        />
        <rect
        style={{ fill: "rgb(252, 252, 252)" }}
        transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,152.22999633789055,260.90999023437496)"
        height="23.62"
        width="16.58"
        y="189.65"
        x="111.15"
        />
        <rect
        style={{ fill: "rgb(252, 252, 252)" }}
        transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,119.06999633789056,308.14999023437497)"
        height="23.62"
        width="16.58"
        y="213.27"
        x="94.58"
        />
        <rect
        style={{ fill: "rgb(252, 252, 252)" }}
        transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,119.06999633789056,213.67999023437494)"
        height="23.62"
        width="16.58"
        y="166.03"
        x="94.58"
        />
        <rect
        style={{ fill: "rgb(20, 20, 22)" }}
        transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,119.06999633789056,260.90999023437496)"
        height="23.62"
        width="16.58"
        y="189.65"
        x="94.58"
        />
        <rect
        style={{ fill: "rgb(252, 252, 252)" }}
        transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,152.22999633789055,165.62999023437493)"
        height="23.62"
        width="16.58"
        y="142.01"
        x="111.15"
        />
        <rect
        style={{ fill: "rgb(20, 20, 22)" }}
        transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,119.06999633789056,165.62999023437493)"
        height="23.62"
        width="16.58"
        y="142.01"
        x="94.58"
        />
        <rect
        style={{ fill: "rgb(239, 123, 215)" }}
        transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,94.57999633789058,236.88999023437492)"
        height="94.88"
        width="7.91"
        y="142.01"
        x="86.67"
        />
        </g>
        {/* right arrow */}
        <g transform="translate(0, 0)">
            <polygon
            fill="#141416"
            points="372.64 236.84 587.34 236.84 612.34 189.63 587.14 142.05 372.44 142.05 397.64 189.63 372.64 236.84"
            />
        </g>
        {/* right arrow */}
        <g transform="translate(227, 0)">
            <polygon
            fill="#141416"
            points="372.64 236.84 587.34 236.84 612.34 189.63 587.14 142.05 372.44 142.05 397.64 189.63 372.64 236.84"
            />
        </g>
        {/* curved arrow */}
        <g>
            <path
            style={{ fill: "#141416" }}
            d="M847,142.05H828.51l25.19,47.58-25,47.21H847c26.51,0,48.08,23,48.08,51.38S873.55,339.59,847,339.59H694.23L669.68,386l25.64,48.43H847c75.43,0,136.79-65.57,136.79-146.16S922.47,142.05,847,142.05Z"
            />
        </g>
        {/* left arrow */}
        <g>
            <polygon
            style={{ fill: "#141416" }}
            points="679.86 339.59 465.16 339.59 440.16 386.8 465.35 434.38 680.05 434.38 654.86 386.8 679.86 339.59"
            />
        </g>
        {/* left arrow */}
        <g transform="translate(-227, 0)">
            <polygon
            style={{ fill: "#141416" }}
            points="679.86 339.59 465.16 339.59 440.16 386.8 465.35 434.38 680.05 434.38 654.86 386.8 679.86 339.59"
            />
        </g>
        {/* curved arrow */}
        <g>
            <path
            style={{ fill: "#141416" }}
            d="M206,339.59h18.54l-25.2,47.58,25,47.21H206c-26.51,0-48.08,23-48.08,51.37s21.57,51.38,48.08,51.38H358.79l24.56,46.36L357.7,631.91H206c-75.43,0-136.79-65.56-136.79-146.16S130.55,339.59,206,339.59Z"
            />
        </g>
        {/* right arrow */}
        <g transform="translate(0, 395)">
            <polygon
            fill="#141416"
            points="372.64 236.84 587.34 236.84 612.34 189.63 587.14 142.05 372.44 142.05 397.64 189.63 372.64 236.84"
            />
        </g>
        {/* right arrow */}
        <g transform="translate(227, 395)">
            <polygon
            fill="#141416"
            points="372.64 236.84 587.34 236.84 612.34 189.63 587.14 142.05 372.44 142.05 397.64 189.63 372.64 236.84"
            />
        </g>
        {/* curved arrow */}
        <g transform="translate(0, 395)">
            <path
            style={{ fill: "#141416" }}
            d="M847,142.05H828.51l25.19,47.58-25,47.21H847c26.51,0,48.08,23,48.08,51.38S873.55,339.59,847,339.59H694.23L669.68,386l25.64,48.43H847c75.43,0,136.79-65.57,136.79-146.16S922.47,142.05,847,142.05Z"
            />
        </g>
        {/* left arrow */}
        <g transform="translate(0, 395)">
            <polygon
            style={{ fill: "#141416" }}
            points="679.86 339.59 465.16 339.59 440.16 386.8 465.35 434.38 680.05 434.38 654.86 386.8 679.86 339.59"
            />
        </g>
        {/* left arrow */}
        <g transform="translate(-227, 395)">
            <polygon
            style={{ fill: "#141416" }}
            points="679.86 339.59 465.16 339.59 440.16 386.8 465.35 434.38 680.05 434.38 654.86 386.8 679.86 339.59"
            />
        </g>
        {/* curved arrow */}
        <g transform="translate(0, 395)">
            <path
            style={{ fill: "#141416" }}
            d="M206,339.59h18.54l-25.2,47.58,25,47.21H206c-26.51,0-48.08,23-48.08,51.37s21.57,51.38,48.08,51.38H358.79l24.56,46.36L357.7,631.91H206c-75.43,0-136.79-65.56-136.79-146.16S130.55,339.59,206,339.59Z"
            />
        </g>
        {/* right arrow */}
        <g transform="translate(0, 790)">
            <polygon
            fill="#141416"
            points="372.64 236.84 587.34 236.84 612.34 189.63 587.14 142.05 372.44 142.05 397.64 189.63 372.64 236.84"
            />
        </g>
        {/* end of map */}
        <g transform="translate(227, 790)">
            <polygon
            fill="#141416"
            points="372.64 236.84 587.34 236.84 612.34 189.63 587.14 142.05 372.44 142.05 397.64 189.63 372.64 236.84"
            />
        </g>
        <g transform="translate(530, 790)">
            <polygon
            points="384.31 189.63 359.95 142.05 94.58 142.01 94.58 236.89 360.14 236.84 384.31 189.63"
            fill="#141416"
            />
        </g>
        <g transform="translate(880, 932)">
            <rect
            style={{ fill: "rgb(20, 20, 22)" }}
            transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,152.22999633789055,308.14999023437497)"
            height="23.62"
            width="16.58"
            y="213.27"
            x="111.15"
            />
            <rect
            style={{ fill: "rgb(20, 20, 22)" }}
            transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,152.22999633789055,213.67999023437494)"
            height="23.62"
            width="16.58"
            y="166.03"
            x="111.15"
            />
            <rect
            style={{ fill: "rgb(252, 252, 252)" }}
            transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,152.22999633789055,260.90999023437496)"
            height="23.62"
            width="16.58"
            y="189.65"
            x="111.15"
            />
            <rect
            style={{ fill: "rgb(252, 252, 252)" }}
            transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,119.06999633789056,308.14999023437497)"
            height="23.62"
            width="16.58"
            y="213.27"
            x="94.58"
            />
            <rect
            style={{ fill: "rgb(252, 252, 252)" }}
            transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,119.06999633789056,213.67999023437494)"
            height="23.62"
            width="16.58"
            y="166.03"
            x="94.58"
            />
            <rect
            style={{ fill: "rgb(20, 20, 22)" }}
            transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,119.06999633789056,260.90999023437496)"
            height="23.62"
            width="16.58"
            y="189.65"
            x="94.58"
            />
            <rect
            style={{ fill: "rgb(252, 252, 252)" }}
            transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,152.22999633789055,165.62999023437493)"
            height="23.62"
            width="16.58"
            y="142.01"
            x="111.15"
            />
            <rect
            style={{ fill: "rgb(20, 20, 22)" }}
            transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,119.06999633789056,165.62999023437493)"
            height="23.62"
            width="16.58"
            y="142.01"
            x="94.58"
            />
            <rect
            style={{ fill: "rgb(239, 123, 215)" }}
            transform="matrix(-0.9999999999999999,1.224646799147353e-16,-1.224646799147353e-16,-0.9999999999999999,94.57999633789058,236.88999023437492)"
            height="94.88"
            width="7.91"
            y="142.01"
            x="86.67"
            />
        </g>

        <a>
            <image 
                onClick={routeToHome}
                href="/assets/intro.png" height={70} x={200} y={150} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/IO.png" height={70} x={450} y={150} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/arithmetic.png" height={70} x={680} y={150} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/function.png" height={70} x={750} y={350} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/struct.png" height={70} x={520} y={350} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/ptr.png" height={70} x={300} y={350} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/dynamicmemory.png" height={70} x={240} y={550} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/reference.png" height={70} x={440} y={550} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/files.png" height={70} x={690} y={550} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/class.png" height={70} x={760} y={750} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/template.png" height={70} x={530} y={750} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/exception.png" height={70} x={300} y={750} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/move.png" height={70} x={220} y={950} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/thread.png" height={70} x={455} y={950} />
        </a>
        <a>
            <image 
                onClick={routeToHome}
                href="/assets/end.png" height={70} x={700} y={950} />
        </a>
        </svg>
    </div>
    );
}
