
export default function checkValidity(values){
    if( Number(values)?.toString() == NaN?.toString() && values?.includes('@')  ) {
      if( values?.includes('.')){
        return ['email', true]
      }else{
        return ['email', false]
      }
    }else if(Number(values).toString() != NaN.toString()){
      if(values?.length ==10){
       return ['phoneNumber' , true]
      }else{
       return ['phoneNumber' , false]
      }
    }else if(Number(values).toString() != NaN.toString()){
      if(values?.trim().length > 0){
       return ['password' , true]
      }else{
       return ['password' , false]
      }
    }
    else{
       if(values?.length <3 || !values){
         return ['username', false]
       }else{
           return ['username', true]
       }
    }
  }