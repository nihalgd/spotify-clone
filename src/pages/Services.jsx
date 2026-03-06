import SectionTitle from '../components/SectionTitle';

function Services() {
  return (
    <section className="section page">
      <SectionTitle title="Services" subtitle="Healthcare support across multiple specialties." />
      <ul className="list">
        <li>Online doctor consultations</li>
        <li>Specialist appointment booking</li>
        <li>Preventive health check packages</li>
        <li>Follow-up and patient history tracking</li>
      </ul>
    </section>
  );
}

export default Services;
