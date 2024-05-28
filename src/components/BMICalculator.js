import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const calculateBMI = (event) => {
    event.preventDefault();
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setMessage(getBMIMessage(bmiValue));
      setModalIsOpen(true);
    } else {
      alert('Please enter valid weight and height');
    }
  };

  const getBMIMessage = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    
    <div class="calculator-area pt-130 pb-100">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-6 offset-lg-6">
					<div class="calculator-chart mb-70">
						<h3>BMI Calculator Chart</h3>
						<table class="table bg-white">
							<thead>
							<tr>
								<th scope="col">BMI</th>
								<th scope="col">Weight Status</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>Below 18.5</td>
								<td>Underweight</td>
							</tr>
							<tr>
								<td>18.5 - 24.9</td>
								<td>Healthy</td>
							</tr>
							<tr>
								<td>25.0 - 29.9</td>
								<td>Overweight</td>
							</tr>
							<tr>
								<td>30.0 - and Above</td>
								<td>Obese</td>
							</tr>
							</tbody>
						</table>
					</div>
					<div class="calculator-form">
						<h3>BMI Calculator Chart</h3>
						<form onSubmit={calculateBMI}>
							<div class="input-wrap">
								<input type="text" value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required placeholder="Weight/kg"/>
							</div>
							<div class="input-wrap">
								<input type="text" value={height}
              onChange={(e) => setHeight(e.target.value)}
              required placeholder="Height/cm"/>
							</div>
							<div class="input-wrap">
								<button type="submit" class="btn btn-gra">
									Calculate <i class="fas fa-angle-double-right"></i>
								</button>
							</div>
						</form>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="BMI Result"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>BMI Result</h2>
        {bmi && (
          <div>
            <h3>Your BMI: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
					</div>
				</div>
			</div>
		</div>
		<div class="calculator-thumb">
			<img src="assets/img/gallery/practicing.png" alt="thumb"/>
		</div>
		<div class="calculator-shape-1">
			<img src="assets/img/shape/shape-3.png" alt="shape"/>
		</div>
		<div class="calculator-shape-2">
			<img src="assets/img/shape/shape-4.png" alt="shape"/>
		</div>
	</div>
  );
};

export default BMICalculator;
