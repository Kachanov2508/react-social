import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activatEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} type="text" value={this.props.status}  onBlur={this.deactivatEditMode} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus