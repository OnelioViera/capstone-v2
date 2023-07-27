import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
} from '../slices/ordersApiSlice';

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data:
    order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  return isLoading ? <Loader /> : error ? <Message variant='danger' />
    : (
      <>
        <h1>Order {order._id}</h1>

      </>
    );
};

export default OrderScreen;
