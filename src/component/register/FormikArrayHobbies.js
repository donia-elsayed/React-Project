import { Field, FieldArray } from "formik";
function FormikArrayHobbies({name,label}) {
    return (
        <div className="text-start px-3">
        <label htmlFor={name} className="form-label fs-5">{label}</label>
        <FieldArray name={name}>
            {
                (fieldArrayProps)=>{
                    const{push,remove,form} = fieldArrayProps
                    const {values} = form
                    const {hobbies} = values
                    return(
                        <div>
                        {
                            hobbies.map((hobby,index)=>(
                                <div key={index} className="mb-2 input-group">
                                    <Field name={`hobbies[${index}]`} className="form-control w-25 me-2"/>
                                    <button type="button" className="btn btn-danger me-1 fs-5 text-center" 
                                    onClick={()=>remove(index)} style={{width:50,padding:5}}>-</button>
                                    <button type="button" className="btn btn-success fs-5 text-center" 
                                    onClick={()=>push('')} style={{width:50,padding:5}}>+</button>
                                </div>
                            ))
                        }
                        </div>
                    )   
                }
            }

        </FieldArray>
        </div>
    )
}
export default FormikArrayHobbies
