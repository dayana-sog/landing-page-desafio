import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container } from './styles';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { email, name } = formData;

    if (email && name) {
      toast.info(
        `Agradecemos a solicitação ${name}, mas a funcionalidade é somente um exemplo.`,
        {
          className: 'toast',
        }
      );

      setFormData({
        name: '',
        email: '',
      });
    } else {
      toast.info('O preenchimento do nome e email é obrigatório.', {
        className: 'toast-erro',
      });
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Deseja receber mais dicas sobre resiliência?</h2>

        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          />
        </label>

        <button type="submit">Claro que sim!</button>
      </form>
    </Container>
  );
}
export default Footer;
