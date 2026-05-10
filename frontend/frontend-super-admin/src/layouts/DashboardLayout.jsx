import Navbar from '../components/Navbar';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <Navbar />

            <div className="container py-4">{children}</div>
        </div>
    );
};

export default DashboardLayout;
