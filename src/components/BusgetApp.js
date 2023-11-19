import React from 'react'
import { Button, Spin, Table, Tag } from 'antd';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const BusgetApp = ({onDeleting, onEditing}) => {
  const { loading, budgetList, error, updateState, response } = useSelector(
    (state) => state.budgetKey
  );
const columns = [
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (_, { date }) => {
      return(
            <p>{new Date(date).toLocaleDateString()}</p>
      )
    },
  },
  {
    title: 'Category',
    key: 'category',
    dataIndex: 'category',
    render: (_, { category }) => {
      return(
            category==="EXPENSES"?
              <Tag color="volcano" key={category}>{category}</Tag>:
              <Tag color="green" key={category}>{category}</Tag>
      )
    },
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Edit/delete',
    key: 'edit',
    dataIndex: 'edit',
    render: (_, record)=>{
      return(
        <>
          <Button onClick={()=>onEditing(record)} shape="circle" icon={<EditFilled />} />
          <Button onClick={()=>onDeleting(record)} shape="circle" icon={<DeleteFilled />} />
        </>
      )
    }
  }, 
];
const Wrapper = styled(Box)({
  backgroundColor: 'white',
  padding: 10,
  margin:20,
  borderRadius: 5,
  height:"85vh",
  overflowY:"scroll",

  '&::-webkit-scrollbar': {
    display:"none"
  }, 
  '@media (max-width: 780px)': {
    overflowX:"scroll",
  }
});
  return (
    <Wrapper>
        {
          budgetList.length?<Table columns={columns} dataSource={budgetList} pagination={{defaultPageSize:10}} /> : <Spin />
        }       
    </Wrapper>
  )
}

export default BusgetApp