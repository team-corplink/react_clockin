import React, {useState} from 'react';
import Switch from '../../components/common/Switch';


const SwitchContainer = ({color, size, onActive}) => {
     const [switchType, setSwitchType] = useState(true);
    const onToggle = () => {
        setSwitchType(!switchType);
    };

    return (
        <Switch color={color} size={size} onToggle={onToggle} actived={switchType}></Switch>
    );
};

export default SwitchContainer;
