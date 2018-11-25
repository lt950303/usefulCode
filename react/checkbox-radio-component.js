class CheckboxOrRadio extends React.Component{

    render(){
        const {
            optionList,
            checkedList,
            type,
            handle,
            name
        } = this.props.typeObj;

        const checkboxDomList = optionList.map((item,index)=>{
            return <label key={index}><input type={type} 
            checked={checkedList.indexOf(item) >-1 ? true: false} 
            onChange={handle}
            value={item} name={name}/>{item}
            
            </label>
        });
        return (
            <div>
                {checkboxDomList}  
            </div>
        );
    }
}

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           typeObj:  {
               optionList: ['orange','apple','bananer'],
               checkedList: ['apple','bananer'],
               type: "radio",
               handle: this.handleChecked,
               name: 'fruit'
            }
        }
    }
    handleChecked = (event)=>{
        // console.log(event.target.value );
        // 点击获取被点击的元素，根据它的之前选中状态切换
        let newArr = [];
        if(this.state.typeObj.checkedList.indexOf(event.target.value)>-1){
            newArr = this.state.typeObj.checkedList.filter(item=>{
                return item != event.target.value;
            });
        }else{
            newArr = [event.target.value,...this.state.typeObj.checkedList]
        }
        this.setState({
            typeObj:  {
                optionList: ['orange','apple','bananer'],
                checkedList: newArr,
                type: "radio",
                handle: this.handleChecked,
                name: 'fruit'
             }
        }); 

    }
    
    render(){
        return (
            <div>
                <form>
                    <input type='text'/>
                    <CheckboxOrRadio typeObj={this.state.typeObj}/> 
                </form>
            </div>

        );
    }
}

const element = <div><Form/></div>;
ReactDOM.render(
    element,
    document.getElementById('root')
);