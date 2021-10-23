import { Field, FieldArray } from "formik";
function FormikArrayHobbies({name,label}) {
    return (
        <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
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
                                <div key={index} className="mb-3">
                                    <Field name={`hobbies[${index}]`} className="mb-2 form-control w-25 m-auto"/>
                                    <button type="button" className="btn btn-danger me-1" onClick={()=>remove(index)}>-</button>
                                    <button type="button" className="btn btn-success" onClick={()=>push('')}>+</button>
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
