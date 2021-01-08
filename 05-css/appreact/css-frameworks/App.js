import React from 'react';
import Card from 'react-bootstrap/Card';
const App = () => {
  return (
    <div>
      <div
        className="card bg-dark text-white m-5"
        style={{ maxWidth: '18rem' }}
      >
        <div className="card-header">Notebook</div>
        <div className="card-body">
          <h5 className="card-title">R$ 2500</h5>
          <p className="card-text">Esse é um notebook 1tb, 16 de ram...</p>
        </div>
      </div>
      {/* // React BootStrap */}
      <Card bg="dark" className="m-5 text-white" style={{ maxWidth: '18rem' }}>
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500</Card.Title>
          <Card.Text>Esse é um notebook 1tb, 16 de ram...</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
