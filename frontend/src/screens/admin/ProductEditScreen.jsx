import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useUpdateProductMutation , useGetProductDetailsQuery, useUploadProductImageMutation } from '../../slices/productsApiSlice';
import { unwrapResult } from '@reduxjs/toolkit';


const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const { data: product, isLoading, refetch, error } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] = useUpdateProductMutation();

  const [uploadProductImage, { isLoading: loadingUpload }] = useUploadProductImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setBrand(product.brand);
      setImage(product.image);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      productId,
      name,
      price,
      brand,
      image,
      category,
      countInStock,
      description,
  };

  const result = await updateProduct(updatedProduct);
  if (result.error) {
    toast.error(result.error.message);
  } else {
    toast.success('Product updated successfully');
    navigate('/admin/productlist');
  }
};

const upLoadFileHandler = async (e) => {
  const formData = new FormData();
  formData.append('image', e.target.files[0]);
  try {
    const res = await uploadProductImage(formData).unwrap();
    toast.success(res.message);
    setImage(res.image);
  } catch (err) {
    toast.error(err?.data?.message || err.error);
  }
};

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}

        { isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
          <Form onSubmit={ submitHandler }>
            <Form.Group controlId='name' className='my-2'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price' className='my-2'>
              <Form.Label className='mt-2'>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image' className='my-2'>
              <Form.Label className='mt-2'>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage}></Form.Control>
            </Form.Group>
            <Form.Control
              type='file'
              label='Choose File'
              onChange={upLoadFileHandler}>
            </Form.Control>

            <Form.Group controlId='brand' className='my-2'>
              <Form.Label className='mt-2'>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock' className='my-2'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='n'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category' className='my-2'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description' className='my-2'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Button
              type='submit'
              variant='primary'
              className='my-2'
              >
              Update
            </Button>
          </Form>
          
        )} 
      </FormContainer>
    </>
  )
};

export default ProductEditScreen;
