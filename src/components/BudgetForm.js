import React from 'react';
import { Button, DatePicker, message, Space } from 'antd';
import {  MenuItem, Select, Stack, TextField } from '@mui/material';
import { addRecord, updateRecord } from '../features/budget/budgetSlice';
import { useDispatch, useSelector } from 'react-redux';
const BudgetForm = ({amount, category, date, description, budgetKey, setAmount, setCategory, setDate, setDescription, setBudgetKey, handleCancel}) => {
  const dispatch = useDispatch();
  const onFinish = (e) => {
    e.preventDefault()
    if(+amount<0){
      message.error('amount must be positive');
    } else {
      if(budgetKey===""){
        dispatch(
          addRecord({
                  amount:amount,
                  category:category.toUpperCase(),
                  date:date,
                  description:description,
          })
        )
        message.success('Submit success!');
      } else {
        dispatch(updateRecord({
                key:budgetKey,
                amount:amount,
                category:category.toUpperCase(),
                date:date,
                description:description,
        }))
      }
    setAmount("")
    setCategory("")
    setDate("")
    setDescription("")
    setBudgetKey("")
    handleCancel()
    }
  };
  return (
    <form onSubmit={onFinish}>
        <Stack spacing={2} direction="row">
            <TextField
                id="amount"
                type="number"
                variant='outlined'
                color='secondary'
                label="Amount"
                onChange={e => setAmount(e.target.value)}
                value={amount}
                fullWidth
                required
                sx={{mb: 2}}
            />
        </Stack>
        <Stack spacing={2} direction="row">
            <TextField
                id="date"
                type="date"
                variant='outlined'
                color='secondary'
                label=""
                onChange={e => setDate(e.target.value)}
                value={date}
                fullWidth
                required
                sx={{mb: 2}}
            />
        </Stack>
        <Stack spacing={2} direction="row">
        <Select
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e)=>setCategory(e.target.value)}
        >
            <MenuItem value="INCOMES">Incomes</MenuItem>
            <MenuItem value="EXPENSES">Expenses</MenuItem>
        </Select>
        </Stack>
        <Stack spacing={2} direction="row">
            <TextField
                id="description"
                type="text"
                variant='outlined'
                color='secondary'
                label="Description"
                onChange={e => setDescription(e.target.value)}
                value={description}
                fullWidth
                required
                sx={{mb: 2}}
            />
        </Stack>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </form>
  );
};
export default BudgetForm;