import { useState,useRef,useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF,Autocomplete, useLoadScript } from '@react-google-maps/api';
import Nav from '../Nav/page'
import BasicMenu from '../Menu/page';
import MiniDrawer from '../Drawer/page'
import { useSelector, useDispatch } from 'react-redux';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import ItemList from '../ItemList/page';
import {Button, Stack,Chip} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {setPickUpAddress, setPickUpCoords,setReceiverAddress ,setReceiverCoords} from '../../redux/reducerSlice/locationSlice'
import CustomForm from '../CustomForm/page';
import BasicSpeedDial from '../FlowingButton/page';
import axios from 'axios';


const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 27.685222,
  lng: 85.345017
};


const Map = () => {
  const dispatch = useDispatch()

  const pickUpInputRef = useRef(null)
  const receiverInputRef = useRef(null)


  const [formStep, setFormStep] = useState(1)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentForm, setCurrentForm] = useState('item')
  const {isItemFormOpen,currentSelectedItem,formDetails} =useSelector(state=>state.item)
  const {id} =useSelector(state=>state.user)

  useEffect(()=>{
    setIsFormOpen(true)
  },[currentSelectedItem._id])

 
  const {pickupAddress ,
    pickupCoordinates,
    receiverCoordinates,
     receiverAddress} =useSelector(state=>state.location)

  let parsedOptions = []
  if(currentSelectedItem['Item Options']){
    parsedOptions = JSON.parse(currentSelectedItem['Item Options'])
  }
 
  const refactoredFormItems = parsedOptions.map((item)=> { 
    return {"label":item.title, type:"text"}
  })
  // 


  const submitOrderRequest=async()=>{
    setFormStep(2)
    const formInputs = {pickupAddress ,
      pickupCoordinates,
      receiverCoordinates,
       receiverAddress,
      senderId: id,
      formDetails
      }
   
 
    await axios.post("http://localhost:8000/orders", {formInputs})
    .then((res) => {
    alert(res.data.msg)
     })
    }


  const assignPickUp = ()=>{
   dispatch(setPickUpAddress(pickUpInputRef.current.value))
  }

  const assignReveiver = ()=>{
    dispatch(setReceiverAddress(receiverInputRef.current.value))
   }
  

  const receiverFormItems = [
    {label:'Receiver Name', type: 'text'},
    {label:'Receiver Number', type: 'text'},
    {label:'Secondary Phone Number', type: 'text'}
 ]
 

    const generateAddress = (lat, lng, action)=> {
      fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=a1dd45a7dfc54f55a44b69d125722fcb`)
      .then(res=> res.json())
      .then(data=> { 
        if(action == 'pickup'){
          dispatch(setPickUpAddress(data.features[0].properties.formatted))
          dispatch(setPickUpCoords({lat,lng}))
        }else{
          dispatch(setReceiverAddress(data.features[0].properties.formatted))
          dispatch(setReceiverCoords({lat,lng}))
        }

      })
    }
  // //     <button>Continue</button>
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0"
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          {formStep==1 ? (
              <MarkerF
              position={pickupCoordinates}
              onDragEnd={(e)=> generateAddress(e.latLng.lat(), e.latLng.lng(), 'pickup')}
              
              draggable={true}
            />
          ):(
            <MarkerF
            position={receiverCoordinates}
            onDragEnd={(e)=> generateAddress(e.latLng.lat(), e.latLng.lng(), 'receiver')}
            
            draggable={true}
          />
          )}
          
        

          {formStep==1 ? (
              <div className='mapGuide'>
              <h3>Place your pick up location</h3>
              <Autocomplete
              onPlaceChanged={()=>assignPickUp()}
              key={1}
            >
              <input placeholder='Search Location' 
              value={pickupAddress}
              ref={pickUpInputRef}
              onChange={(e)=> dispatch(setPickUpAddress(e.target.value))}
              />
              </Autocomplete>
              <Button onClick={()=>setFormStep(2)} variant="outlined" startIcon={<TaskAltIcon />}>
              Proceed
            </Button>
  
              </div>
          ) : (
            <div className='mapGuide'>
             <h3>Enter receiver's location</h3>
              <Autocomplete
                onPlaceChanged={()=>assignReveiver()}
              key={2}
       
            >
              <input placeholder='Search Location' 
              ref={receiverInputRef}
              onChange={(e)=> dispatch(setReceiverAddress(e.target.value))}
              value={receiverAddress}/>
              </Autocomplete>
              <Grid container spacing={2}>
  <Grid item xs={8}>

    <Button onClick={()=>setFormStep(1)} variant="outlined" startIcon={<ArrowBackIcon />}>
                Back
                </Button>
  </Grid>
  <Grid item xs={4}>
  <Button onClick={()=>submitOrderRequest()}>
              Place order
            </Button>
  </Grid>
</Grid>
           
            
            </div>
          )}
          
          <div className='proceed'>
              <BasicSpeedDial/>
            </div>
              

          {
          isItemFormOpen && (
            <div className='itemsLists'>
              <ItemList/>
              </div>)
              }
            {
              isItemFormOpen && Object.keys(currentSelectedItem).length>0 && (
                <Collapse in={isFormOpen}>
               <div className='itemsForm'>
                  <button onClick={()=> setIsFormOpen(false)}>Close</button>
                  <Stack direction="row" spacing={1}>
                  <Chip onClick={()=>setCurrentForm('item')} label="Item" color="primary" variant={currentForm=="item" ? "" :"outlined"} />
                  <Chip onClick={()=>setCurrentForm('receiver')} label="Receiver Info" color="primary"  variant={currentForm=="receiver" ? "" :"outlined"}/>
                </Stack>

                {currentForm == 'item' ? (
                <CustomForm saveToRedux={true} hideSave={true}  formItems={refactoredFormItems} apiEndpoint="/" disableSaveOption={true}/>
                ):   <CustomForm formItems={receiverFormItems} hideSave={true}  saveToRedux={true} apiEndpoint="/" disableSaveOption={true}/>}
                 
                 </div>
                 </Collapse>
              )
            }
         
            <MiniDrawer/>
           
   
 
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
}

export default Map