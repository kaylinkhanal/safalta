'use client'
import {useEffect, useState} from 'react'
import Lists from '../components/Lists/page'
import List from '@mui/material/List';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Map from '../components/Map/page'
import {useSelector, useDispatch} from 'react-redux'
import Box from '@mui/material/Box';
import CustomForm from '../components/CustomForm/page';
import Grid from '@mui/material/Grid';

  
const UserDashboard = ()=> {
    const [itemList, setItemList] = useState([])
    const [pageCount, setPageCount] = useState(0)
   
    const fetchItem  = async(page=1)=> {
        const res = await fetch('http://localhost:8000/items?page='+page)
        const data = await res.json()
        setItemList(data.itemList)
        setPageCount(data.pageCount)
    }

    const handleChange = (event, value) => {
        fetchItem(value)
      };
    useEffect(()=>{
        fetchItem()
    }, [])
   
    const formItems =[]


    return (
      <div>
       <Map/>
      </div>
    )
}
export default UserDashboard