import './style.css';

const Footer = ({ dataAtualizacao }) => {
  return (
    <header className="App-footer">
      <strong>Última atualização: {dataAtualizacao}</strong>
    </header>
  );
};

export default Footer;
