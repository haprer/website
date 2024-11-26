

/** CSS */
import '/src/pages/Website.css'


const Mantaray = () => {
    return (
        <div className='websitePage'> 
            <a href="https://github.com/haprer/website">View the code here</a>
            <div>
                <p>
                    This website is built using React.JS, Primereact, and Vite. It is deployed using GitHub Actions, 
                    AWS S3, and AWS Cloudfront. 
                </p>
            </div>
        </div>
    );
};

export default Mantaray;