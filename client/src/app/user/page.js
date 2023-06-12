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
    const {currentSelectedItem} = useSelector(state=>state.item)
    const newArr = Object.entries(currentSelectedItem)
    console.log(newArr)
    const refactoredFormItems = newArr.map((item)=> { 
      return {"label":item.title, type:"text"}
    })
    const fetchItem  = async(page=1)=> {
        const res = await fetch('http://localhost:3000/items?page='+page)
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
    // return (
    //    <div>
    //    <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={5}>
    //     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //        {itemList.length>0 ? (
    //            <div>
    //            {itemList.map((item)=>{
    //               return( 
    //                 <Lists item={item}/>
    //                    )
    //            })}
    //            <Stack spacing={2}>
    //             <Pagination count={pageCount} onChange={handleChange} />
    //             </Stack>
    //            </div>
    //        ):  (<Stack spacing={1}>
    //        <Skeleton variant="rectangular" width={210} height={60} />
    //        <Skeleton variant="rectangular" width={210} height={60} />
    //        <Skeleton variant="rectangular" width={210} height={60} />
    //      </Stack>)}
    //        </List>
    //     </Grid>
    //     <Grid item xs={7}>
    //     {currentSelectedItem['Item Name']}
    //     <br/>
    //     <CustomForm formItems={refactoredFormItems} apiEndpoint="/" disableSaveOption={true}/>
    //     <button>Continue</button>
    //     </Grid>
        
    //   </Grid>
 
    // </Box>
        
        
    //    </div>

    // )

    return (
      <div>
       <Map/>
      </div>
    )
}
export default UserDashboard