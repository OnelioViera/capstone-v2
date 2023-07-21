import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGoup, Image, Form, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';

const cartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div>CartScreen</div>
    )
}

export default CartScreen;
