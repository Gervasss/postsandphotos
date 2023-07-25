
import './styles.css'

export  const TextInput =({searchValue,handleChange})=>{
    return(
<input  
value={searchValue}
type='search'
onChange={handleChange}
placeholder='type your search'
/>

    )
}
