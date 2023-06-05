import react from 'react';

function SubTitle({subtitle,props}){
    return(
        <div className={`w-[95%] flex justify-center items-center`}>
        <h3 className="border-b border-danger p-1 rounded">
          {subtitle}
        </h3>
      </div>
    )
}

export {SubTitle};