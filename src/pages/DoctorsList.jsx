import SectionTitle from '../components/SectionTitle';

const doctors = [
  { name: 'Dr. Emily Carter', specialty: 'Cardiologist', experience: '12 Years' },
  { name: 'Dr. Marcus Lee', specialty: 'Pediatrician', experience: '9 Years' },
  { name: 'Dr. Sophia Patel', specialty: 'General Physician', experience: '10 Years' },
  { name: 'Dr. Daniel Brooks', specialty: 'Dermatologist', experience: '7 Years' }
];

function DoctorsList() {
  return (
    <section className="section page">
      <SectionTitle title="Doctors List" subtitle="Choose from our top-rated specialists." />
      <div className="card-grid">
        {doctors.map((doctor) => (
          <article className="card" key={doctor.name}>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <small>{doctor.experience} Experience</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DoctorsList;
