import Navbar from '../components/Navbar';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <Navbar />

            <main className="container">{children}</main>
        </div>
    );
};

export default DashboardLayout;
