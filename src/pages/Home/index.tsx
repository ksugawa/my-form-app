import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import PATH from '../../utils/path';

const Home = (): JSX.Element => {

    const navigate = useNavigate();

    const handleGotoRegister = () => {
        navigate(PATH.REGISTER);
    }
    return (
        <>
            <div className='top-base'>
                <h1>ようこそ！</h1>
                <div className='button-area'>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => handleGotoRegister()}
                    >
                        会員登録
                    </Button>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => handleGotoRegister()}
                    >
                        ログイン
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Home;
