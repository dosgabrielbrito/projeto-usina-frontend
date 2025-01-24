import './style.css';
import { patchUsinas } from '../../services/usinas.js';

const UpdateBtn = () => {
  async function atualizaUsinas() {
    await patchUsinas();
  }

  const handleClick = () => {
    atualizaUsinas();
    window.location.reload();
  };

  return (
    <button type="button" className="btn-update" onClick={handleClick}>
      Atualizar
    </button>
  );
};

export default UpdateBtn;
