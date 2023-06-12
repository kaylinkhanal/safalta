'use client'
import CustomForm from '../../components/CustomForm/page'
const AddItems = ()=> {
    const formItems = [
        {label:'Item Name', type: 'text'},
        {label:'Item Description', type: 'text'},
        {label:'Item Options', type: 'selection' ,availableSelection: [{title: 'Weight'},{title: 'Product Name'},{title:'Model No'},{title:'Brand'},{title:'Color'},{title:'Expiry Date'}]},
        {label:'Item Image', type: 'file'}
     ]
    return (
        <div>
            Add items
            <CustomForm formItems={formItems} apiEndpoint="/items"/>
        </div>
    )
}
export default AddItems