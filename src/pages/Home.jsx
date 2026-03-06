import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const services = [
  { title: 'General Checkup', description: 'Routine health assessments and preventive care.' },
  { title: 'Pediatrics', description: 'Specialized healthcare services for children and teens.' },
  { title: 'Cardiology', description: 'Heart-focused diagnostics and expert treatment plans.' }
];

const doctors = [
  { name: 'Dr. Emily Carter', specialty: 'Cardiologist' },
  { name: 'Dr. Marcus Lee', specialty: 'Pediatrician' },
  { name: 'Dr. Sophia Patel', specialty: 'General Physician' }
];

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Book Your Doctor Appointment in Minutes</h1>
          <p>
            Find trusted specialists, choose your preferred slot, and confirm your booking online
            with ease.
          </p>
          <Link className="btn" to="/book-appointment">
            Book Appointment
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionTitle title="Our Services" subtitle="Quality healthcare tailored to your needs." />
        <div className="card-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle title="How It Works" subtitle="Simple 3-step appointment process." />
        <div className="steps-grid">
          <div className="step-card">
            <span>1</span>
            <h3>Find Doctor</h3>
            <p>Browse specialists based on your condition and preferences.</p>
          </div>
          <div className="step-card">
            <span>2</span>
            <h3>Select Date & Time</h3>
            <p>Pick a suitable date and available consultation time slot.</p>
          </div>
          <div className="step-card">
            <span>3</span>
            <h3>Confirm Appointment</h3>
            <p>Submit details and receive your instant booking confirmation.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle title="Featured Doctors" subtitle="Meet experienced specialists from top clinics." />
        <div className="card-grid">
          {doctors.map((doctor) => (
            <article className="card" key={doctor.name}>
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
