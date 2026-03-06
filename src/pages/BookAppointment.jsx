import { useState } from 'react';

const doctorOptions = ['Dr. Emily Carter', 'Dr. Marcus Lee', 'Dr. Sophia Patel', 'Dr. Daniel Brooks'];

function BookAppointment() {
  const [formData, setFormData] = useState({
    doctor: doctorOptions[0],
    patientName: '',
    date: '',
    time: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Appointment booked with ${formData.doctor} for ${formData.patientName}.`);
  };

  return (
    <section className="section page">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Book Appointment</h2>

        <label htmlFor="doctor">Select Doctor</label>
        <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange}>
          {doctorOptions.map((doctor) => (
            <option key={doctor} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>

        <label htmlFor="patientName">Patient Name</label>
        <input
          id="patientName"
          name="patientName"
          type="text"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />

        <label htmlFor="time">Time</label>
        <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default BookAppointment;
