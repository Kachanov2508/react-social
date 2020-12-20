import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activatEditMode = () => {
        console.log("this:", this)
        this.setState({
            editMode: true
        })
    }
    deactivatEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatEditMode}>{this.props.status || "Укажите статус"}</span> 
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} type="text" value={this.state.status}  onBlur={this.deactivatEditMode} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus