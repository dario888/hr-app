



export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: '#45bceb',
        padding: 10,
        fontSize: '14px',
        cursor: 'pointer',
        
    }),

    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#3a5e6d',
        minHeight: '30px',
        height: '30px',
        fontSize: '14px',
        cursor: 'pointer',

        ':hover':{
            boxShadow: '0px 0px 2px 1px #c7cacc'
        }

    }),

    container: (provided, state) => ({
        ...provided,
        padding:0,
        margin: 0,
        width: '85%',

    }),

    dropdownIndicator:(provided,state) => ({
        ...provided,
        padding: 0,
        color: '#45bceb',

        ':hover':{
            ...provided[':hover'],
            color: '#45bceb'
        }

    }),

    indicatorContainer:(provided,state) => ({
        ...provided,
        height: '30px',
    }),

    valueContainer:(provided,state) => ({
        ...provided,
        height: '30px',
        padding:'0px 6px',
              
    }),
   
    singleValue:(provided,state) => ({
        ...provided,
        paddingTop:'6px',
        
    }),

    menu:(provided,state) => ({
        ...provided,
        backgroundColor: '#3a5e6d',        
    }),

    placeholder:(provided,state) => ({
        ...provided,
        color: '#45bceb',
        paddingTop:'3px',
        margin:2
       
    }),
        
}


