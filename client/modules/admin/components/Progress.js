import React from 'react';
import {Line} from 'rc-progress';


const Progress = ({stage}) => {
  const percent = +Math.round(((stage-1)/10)*100)
  return <div style={{display: 'flex', flexDirection: 'column',marginRight: '20px'}}>
            <div>
							<Line style={{width: "90%",height: '15px'}} percent={percent} strokeWidth="6" strokeColor="#007681" trailWidth="6" trailColor='#ccc'/>
            <div style={{flex: '1', fontSize: '12px'}}>{`${percent} %`}</div>

        </div>
			</div>
}


export default Progress;
