const React = require('react')
class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>         
        <div>
        <img src={this.state.file} style={{width:"250px",height:"300px",borderRadius:"30px"}} />
      </div>
      <div>
        <input style={{width:"250px",padding:"10px",height:"50px"}} type="file" onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}
export default Upload;