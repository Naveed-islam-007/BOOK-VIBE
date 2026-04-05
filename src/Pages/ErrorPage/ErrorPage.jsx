import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        }}>
            <h1 style={{ fontSize: "80px", margin: "0" }}>404</h1>
            <h2>Oops! Page Not Found</h2>
            <p>The page you are looking for doesn’t exist or has been moved.</p>

            <Link to="/" style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px"
            }}>
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;