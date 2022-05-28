import AddShopForm from './components/AddShopForm';
import Navbar from './components/Header';
import { useSelector } from 'react-redux';
import Shoplist from './components/Shoplist';
import { useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice'
import BootstrapModal from './components/BootstrapModal';
function App() {
  const dispatch = useDispatch()
  const showForm = useSelector(state => state.ui.formIsVisible)
  const showModal = useSelector(state => state.ui.modal)

  const onCloseHandler = () => {
    dispatch(uiActions.modalVisible())
  }

  return (
    <div>
      <Navbar formOpen={showForm} />
      {showForm && <AddShopForm />}
      <Shoplist />
      {showModal && <BootstrapModal onClose={onCloseHandler} show={showModal.modalIsVisible} />}
    </div>
  );
}

export default App;
