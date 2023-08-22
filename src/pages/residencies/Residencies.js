import { Link } from 'react-router-dom';
import './residencies.css'
import { residencies } from '../../data';


const Residencies = () => {
  return (
    <section className="residencies-section">
      <h2>Residencies</h2>
      <div className="residency-list">
        {residencies.map(residency => (
          <div key={residency.id} className="residency-item">
            <div className="residency-image">
              <img src={residency.imageUrl} alt={residency.title} />
            </div>
            <div className="residency-content">
              <h3>{residency.title}</h3>
              <p>{residency.location}</p>
              <p>Duration: {residency.duration}</p>
              <p className='description'>{residency.description}</p>
              <Link to='/Payment' className='btn'>Rent</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Residencies
