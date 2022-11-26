let user_Name;
let user_Email;
let user_Phon;
let data_array = [];

function DataValue() {
    user_Name = document.querySelector(".user-Name").value;
    user_Email = document.querySelector(".user-Email").value;
    user_Phon = document.querySelector(".user-Phon").value;
    
}
let handelData = (e) => {
    e.preventDefault();
    data_array.push({
       user_Name,
        user_Email,
       user_Phon
    })
    console.log(data_array)
    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
    e.target.elements[2].value = "";
    updateData();
   
}
function updateData() {
    let content_form = (
        <div className="form-content">
            <form onSubmit={handelData}>
                <input className="user-Name" type="text"  placeholder="Your name" onChange={DataValue} />
                <input className="user-Email" type="text" placeholder="Your Email" onChange={DataValue}  />
                <input className="user-Phon"type="text" placeholder="Your phon" onChange={DataValue} />
                <input type="submit" />
            </form>
            <ul>
                {data_array.length ? data_array.map((ele) => (<tr>
                    <td>{ele.user_Name} </td>
                    <td>{ele.user_Email} </td>
                    <td> {ele.user_Phon}</td>
                </tr>))  : ""}
            </ul>
        </div>
    )
    ReactDOM.render(content_form,document.querySelector("#App"));
}
updateData()


