import axios from 'axios';
import React, {useState} from 'react';
import Map from './Map2';

function HostRegist(props) {

    const [inputs, setInputs] = useState({
        HOUSE_NAME:'',
        HOUSE_CONTENTS:'',
        HOUSE_ADDRESS1:'',
        HOUSE_GUEST:'',
        HOUSE_BED:'',
        HOUSE_BEDROOM:'',
        HOUSE_BATHROOM:'',
     
    });

    const {HOUSE_NAME, HOUSE_CONTENTS, HOUSE_ADDRESS1, HOUSE_ADDRESS2, HOUSE_GUEST, HOUSE_BED, HOUSE_BEDROOM,
             HOUSE_BATHROOM} = inputs;
    
    const[HOUSE_PAY, setHousePay] = useState(0); 
    const onChangeHousePay = (e) => {
        const { value } = e.target
        // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
        const onlyNumber = value.replace(/[^0-9]/g, '')
        setHousePay(onlyNumber);
    }

    const onChange = (e) => {

        const { value, name } = e.target;
        console.log(value, name );
            
        setInputs({
            ...inputs,
            [name]: value});
    };

    const onSubmit=(e)=> {
        e.preventDefault();
        
        var frmData = new FormData(e.currentTarget);
     
        axios.post('http://localhost:9090/house/insert/', frmData)
        .then(
            res =>{
                alert("등록되었습니다.");
                // history('/board');//list 로 이동하기 
            }
        )
    }

    //카운트    
    const [guest_cnt, setCount1] = useState(1);
    const [bed_cnt, setCount2] = useState(0);
    const [HOUSE_BEDROOM_CNT, setCount3] = useState(0);
    const [HOUSE_BATHROOM_CNT, setCount4] = useState(0);

//최대인원
    const increase1= () =>{
        setCount1(guest_cnt+1);
    }
    const decrease1=()=>{
        if(guest_cnt-1<0) setCount1(0);
        else setCount1(guest_cnt-1);
    }
//침대수
    const increase2= () =>{
        setCount2(bed_cnt+1);
    }
    const decrease2=()=>{
        if(bed_cnt-1<0) setCount2(0);
        else setCount2(bed_cnt-1);       
    }
//침실수
    const increase3= () =>{
        setCount3(HOUSE_BEDROOM_CNT+1);
    }
    const decrease3=()=>{
        if(HOUSE_BEDROOM_CNT-1<0) setCount3(0);
        else setCount3(HOUSE_BEDROOM_CNT-1);
    }    
//욕실수
    const increase4= () =>{
        setCount4(HOUSE_BATHROOM_CNT+1);
    }
    const decrease4=()=>{
        if(HOUSE_BATHROOM_CNT-1<0) setCount4(0);
        else setCount4(HOUSE_BATHROOM_CNT-1);
    }
   //카운트 끝

    return (
    <div>
        <div style={{marginTop:"100px"}}>
           <h1> 숙소 등록 </h1>
           <form name="houseform" onSubmit = {onSubmit} encType="multipart/form-data">
            <div>
                <label> 숙소명: </label>
                <input
                type="text"
                className="form-control"
                name="HOUSE_NAME"
                value={HOUSE_NAME}
                onChange={onChange}
                />
            </div>
            <div>
                <label> 숙소소개: </label>
                <input
                type="text"
                className="form-control"
                name="HOUSE_CONTENTS"
                value={HOUSE_CONTENTS}
                onChange={onChange}
                />
            </div>
            <div>
                <label> 숙소주소: </label>
                <input
                type="text"
                className="form-control"
                name="HOUSE_ADDRESS1"
                value={HOUSE_ADDRESS1}
                onChange={onChange}
                />
            </div>
            <div>
                <label> 숙소상세주소: </label>
                <input
                type="text"
                className="form-control"
                name="HOUSE_ADDRESS2"
                value={HOUSE_ADDRESS2}
                onChange={onChange}
                />               
                <div> 
                <Map destination={"서울시 강남구"}/>
                </div>
            </div>
            <div>
                <label> 숙소최대인원:  </label>   
                <input
                type="text"
                className="form-control"
                name="HOUSE_GUEST"
                value={guest_cnt}
                onChange={onChange}
                />
                <button type="button" onClick={decrease1}>감소</button>
                <button type="button" onClick={increase1}>증가</button>
            </div>
            <div>
                <label> 숙소침대수: </label>
                <input
                type="text"
                className="form-control"
                name="HOUSE_BED"
                value={bed_cnt}
                onChange={onChange}
                />
                <button type="button" onClick={decrease2}>감소</button>
                <button type="button" onClick={increase2}>증가</button>
            </div>
            <div>
                <label> 숙소침실수: </label>
                <input
                type="text"
                className="form-control"
                name="HOUSE_BEDROOM"
                value={HOUSE_BEDROOM_CNT}
                onChange={onChange}
                />
                <button type="button" onClick={decrease3}>감소</button>
                <button type="button" onClick={increase3}>증가</button>
            </div>
            <div>
                <label> 숙소욕실수: </label>
                <input
                type="text"
                className="form-control"
                name="HOUSE_BATHROOM"
                value={HOUSE_BATHROOM_CNT}
                onChange={onChange}
                />
                <button type="button" onClick={decrease4}>감소</button>
                <button type="button" onClick={increase4}>증가</button>
            </div>
            <div>
                <label> 숙소비용(\): </label>
                <input
                type="text"
                className="form-control"
                name="HOUSE_PAY"
                value={HOUSE_PAY}
                onChange={onChangeHousePay}
                />
            </div>
            <div>
                <label> 숙소사진1: </label>
                <input
                type="file"
                className="form-control"
                name="files"
                />
            </div>
            <div>
                <label> 숙소사진2: </label>
                <input
                type="file"
                className="form-control"
                name="files"
                />
            </div>
            <div>
                <label> 숙소사진3: </label>
                <input
                type="file"
                className="form-control"
                name="files"
                />
            </div>        
            <div className="form-group">
                  <input type="submit" value="등록 " className="btn btn-primary"/>
            </div>
          </form>
        </div>
    </div>
    );
}

export default HostRegist;