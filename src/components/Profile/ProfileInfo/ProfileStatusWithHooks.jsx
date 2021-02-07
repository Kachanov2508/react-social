import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activatEditMode = () => {
        setEditMode(true)
    }

    const deactivatEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activatEditMode}>{props.status || "Укажите статус"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} type="text" onBlur={deactivatEditMode} value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;